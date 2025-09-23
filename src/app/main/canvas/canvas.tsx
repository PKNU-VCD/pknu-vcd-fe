'use client';

import styled from '@emotion/styled';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';

type Props = {
  dotRadius?: number;
  spacing?: number;
  baseColor?: string;
  colors?: string[];
  burstEvery?: number; // 랜덤 스탬프 (0 이상이면)
  decayPerSec?: number; // 확인을 위한 지속
  stampCoords?: DotCoord[];
  stampUnits?: 'cells' | 'px';
};

export type DotFireworksHandle = {
  triggerStampAtWindowPx: (x: number, y: number, opts?: StampOptions) => void;
  triggerStampAtElement: (el: HTMLElement, opts?: StampOptions) => void;
};

type DotCoord = { dx: number; dy: number; a?: number };

type StampOptions = {
  color?: string;
  intensityBoost?: number;
  units?: 'cells' | 'px';
  scaleCells?: number;
  scalePx?: number;
  rotationDeg?: number;
  subpixel?: 'nearest' | 'bilinear';
  thicken?: number;
};

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const CanvasWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

const DotFireworksBackground = forwardRef<DotFireworksHandle, Props>(
  function DotFireworksBackground(
    {
      dotRadius = 2,
      spacing = 18,
      baseColor = '#F2F2F2',
      colors = ['#28C6B7', '#FFE35A', '#FFADEB', '#0AB5E6', '#00B894'],
      burstEvery = 0,
      decayPerSec = 0.9,
      stampCoords = [],
      stampUnits = 'cells',
    },
    ref,
  ) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const stateRef = useRef({
      dpr: 1,
      width: 0,
      height: 0,
      cols: 0,
      rows: 0,
      cell: spacing,
      r: dotRadius,
      ctx: null as CanvasRenderingContext2D | null,
      intensity: new Float32Array(0),
      tint: [] as string[],
      baseColor,
      palette: colors,
      decayPerSec,
      stampCoords: stampCoords as DotCoord[],
      stampUnits: stampUnits as 'cells' | 'px',
    });

    useEffect(() => {
      const s = stateRef.current;
      s.baseColor = baseColor;
      s.palette = colors;
      s.cell = spacing;
      s.r = dotRadius;
      s.decayPerSec = decayPerSec;
      s.stampCoords = stampCoords ?? [];
      s.stampUnits = stampUnits;
    }, [baseColor, colors, spacing, dotRadius, decayPerSec, stampCoords, stampUnits]);

    const stampAtGrid = useCallback(
      (cx: number, cy: number, coords: DotCoord[], opts?: StampOptions) => {
        const s = stateRef.current;
        const { cols, rows } = s;
        if (cols === 0 || rows === 0 || coords.length === 0) return;

        const color = opts?.color ?? s.palette[Math.floor(Math.random() * s.palette.length)];
        const boost = opts?.intensityBoost ?? 1;
        const rot = ((opts?.rotationDeg ?? 0) * Math.PI) / 180;
        const cos = Math.cos(rot),
          sin = Math.sin(rot);

        const units = opts?.units ?? s.stampUnits ?? 'cells';
        const scaleCells = opts?.scaleCells ?? 1;
        const scalePx = opts?.scalePx ?? 1;
        const subpixel = opts?.subpixel ?? 'nearest';
        const thicken = opts?.thicken ?? 0;

        const intensity = s.intensity;
        const tint = s.tint;
        const idx = (x: number, y: number) => y * cols + x;

        const push = (gx: number, gy: number, v: number) => {
          if (gx < 0 || gy < 0 || gx >= cols || gy >= rows) return;
          const id = idx(gx, gy);
          if (v > intensity[id]) {
            intensity[id] = v;
            tint[id] = color;
          }
        };

        for (const p of coords) {
          let x = p.dx,
            y = p.dy;
          if (units === 'cells') {
            x *= scaleCells;
            y *= scaleCells;
          } else {
            x = (x * scalePx) / s.cell;
            y = (y * scalePx) / s.cell;
          }

          const rx = x * cos - y * sin;
          const ry = x * sin + y * cos;

          const a = clamp01((p.a ?? 1) * boost);
          if (a <= 0) continue;

          if (subpixel === 'bilinear') {
            const fx = cx + rx,
              fy = cy + ry;
            const ix = Math.floor(fx),
              iy = Math.floor(fy);
            const tx = fx - ix,
              ty = fy - iy;
            const w00 = (1 - tx) * (1 - ty);
            const w10 = tx * (1 - ty);
            const w01 = (1 - tx) * ty;
            const w11 = tx * ty;
            push(ix, iy, a * w00);
            push(ix + 1, iy, a * w10);
            push(ix, iy + 1, a * w01);
            push(ix + 1, iy + 1, a * w11);
          } else {
            const gx = Math.round(cx + rx);
            const gy = Math.round(cy + ry);
            push(gx, gy, a);

            if (thicken > 0) {
              for (const [dx, dy] of [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
              ] as const) {
                push(gx + dx, gy + dy, a * thicken);
              }
            }
          }
        }
      },
      [],
    );

    const triggerStampAtWindowPx = useCallback(
      (x: number, y: number, opts?: StampOptions) => {
        const s = stateRef.current;
        if (!s.stampCoords.length) return;
        const gx = Math.round(x / s.cell);
        const gy = Math.round(y / s.cell);
        stampAtGrid(gx, gy, s.stampCoords, opts);
      },
      [stampAtGrid],
    );

    const triggerStampAtElement = useCallback(
      (el: HTMLElement, opts?: StampOptions) => {
        const r = el.getBoundingClientRect();
        triggerStampAtWindowPx(r.left + r.width / 2, r.top + r.height / 2, opts);
      },
      [triggerStampAtWindowPx],
    );

    useImperativeHandle(ref, () => ({ triggerStampAtWindowPx, triggerStampAtElement }), [
      triggerStampAtWindowPx,
      triggerStampAtElement,
    ]);

    useEffect(() => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d', { alpha: true })!;
      let raf = 0;
      let timer: ReturnType<typeof setInterval> | null = null;

      const s = stateRef.current;
      s.ctx = ctx;

      const dpr = Math.max(1, window.devicePixelRatio || 1);
      s.dpr = dpr;

      const resize = () => {
        s.width = window.innerWidth;
        s.height = window.innerHeight;

        canvas.width = Math.floor(s.width * dpr);
        canvas.height = Math.floor(s.height * dpr);
        canvas.style.width = `${s.width}px`;
        canvas.style.height = `${s.height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        s.cols = Math.ceil(s.width / s.cell) + 1;
        s.rows = Math.ceil(s.height / s.cell) + 1;

        s.intensity = new Float32Array(s.cols * s.rows);
        s.tint = new Array(s.cols * s.rows).fill(s.palette[0]);
      };

      const step = (dtSec: number) => {
        const intensity = s.intensity;
        const decay = Math.min(1, s.decayPerSec * dtSec);
        for (let i = 0; i < intensity.length; i++) {
          if (intensity[i] > 0) intensity[i] = Math.max(0, intensity[i] - decay);
        }
      };

      const draw = () => {
        ctx.clearRect(0, 0, s.width, s.height);
        const { cols, rows, cell, r } = s;

        for (let gy = 0; gy < rows; gy++) {
          for (let gx = 0; gx < cols; gx++) {
            const id = gy * cols + gx;
            const cx = gx * cell + 0.5;
            const cy = gy * cell + 0.5;

            ctx.globalAlpha = 1;
            ctx.fillStyle = s.baseColor;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fill();

            const v = s.intensity[id];
            if (v > 0.001) {
              ctx.globalAlpha = Math.pow(v, 0.7);
              ctx.fillStyle = s.tint[id];
              ctx.beginPath();
              ctx.arc(cx, cy, r, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      };

      let prev = performance.now();
      const loop = (now: number) => {
        const dtSec = (now - prev) / 1000;
        prev = now;
        step(dtSec);
        draw();
        raf = requestAnimationFrame(loop);
      };

      resize();
      window.addEventListener('resize', resize);
      prev = performance.now();
      raf = requestAnimationFrame(loop);

      if (burstEvery > 0 && s.stampCoords.length) {
        timer = setInterval(() => {
          const cx = Math.floor(Math.random() * s.cols);
          const cy = Math.floor(Math.random() * s.rows);
          stampAtGrid(cx, cy, s.stampCoords);
        }, burstEvery);
      }
      type Detail = {
        x: number;
        y: number;
        color?: string;
        intensityBoost?: number;
        units?: 'cells' | 'px';
        scaleCells?: number;
        scalePx?: number;
        rotationDeg?: number;
        subpixel?: 'nearest' | 'bilinear';
        thicken?: number;
      };
      const onStamp = (ev: Event) => {
        const e = ev as CustomEvent<Detail>;
        triggerStampAtWindowPx(e.detail.x, e.detail.y, e.detail);
      };
      window.addEventListener('dotFireWorks', onStamp as EventListener);

      return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('dotFireWorks', onStamp as EventListener);
        if (timer) clearInterval(timer);
        cancelAnimationFrame(raf);
      };
    }, [burstEvery, stampAtGrid, triggerStampAtWindowPx]);

    return (
      <CanvasWrap>
        <canvas ref={canvasRef} />
      </CanvasWrap>
    );
  },
);

export default DotFireworksBackground;
