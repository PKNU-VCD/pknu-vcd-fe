'use client';

import { AnimatePresence, motion, useAnimationControls, useMotionValue } from 'motion/react';
import { cloneElement, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

type FloatingDraggableProps = {
  icon: React.ReactElement;
  initialPercent: { x: number; y: number };
  dropRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  label?: string;
  onOverDropArea?: (p: {
    phase: 'enter' | 'move' | 'leave' | 'drop';
    windowX: number;
    windowY: number;
  }) => void;
};

type Ghost = { id: number; x: number; y: number; bornAt: number };

export default function FloatingDraggable({
  icon,
  initialPercent,
  dropRef,
  containerRef,
  label = 'floating icon',
  onOverDropArea,
}: FloatingDraggableProps) {
  const controls = useAnimationControls();
  const selfRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 잔상 리스트
  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const GHOST_LIFETIME = 450;
  const GHOST_MAX = 6;
  const SAMPLE_INTERVAL = 40;

  // 퍼센트 -> px 변환
  const calcXYFromPercent = useCallback(() => {
    const root = containerRef.current;
    const el = selfRef.current;
    if (!root || !el) return null;

    const rect = root.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const px = Math.max(0, Math.min(100, initialPercent.x));
    const py = Math.max(0, Math.min(100, initialPercent.y));

    const nx = rect.width * (px / 100) - elRect.width / 2;
    const ny = rect.height * (py / 100) - elRect.height / 2;

    return { x: nx, y: ny };
  }, [containerRef, initialPercent.x, initialPercent.y]);

  // DOM paint 전 실행 (깜빡임 방지)
  useLayoutEffect(() => {
    const setInitial = () => {
      const pos = calcXYFromPercent();
      if (pos) {
        controls.set(pos);
        x.set(pos.x);
        y.set(pos.y);
      }
    };
    const raf = requestAnimationFrame(setInitial);

    // 컨테이너 리사이즈
    const root = containerRef.current;
    let ro: ResizeObserver | null = null;
    const applyResize = () => {
      if (dragging) return;
      const pos = calcXYFromPercent();
      if (pos) {
        controls.set(pos);
        x.set(pos.x);
        y.set(pos.y);
      }
    };

    if (root && 'ResizeObserver' in window) {
      ro = new ResizeObserver(applyResize);
      ro.observe(root);
    } else {
      window.addEventListener('resize', applyResize);
    }

    return () => {
      cancelAnimationFrame(raf);
      if (ro && root) ro.unobserve(root);
      else window.removeEventListener('resize', applyResize);
    };
  }, [calcXYFromPercent, controls, containerRef, dragging, x, y]);

  // 교차 지점 확인
  function isIntersecting(a: DOMRect, b: DOMRect) {
    return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
  }

  // 아이콘 요소의 중앙 지점 계산
  const getIconCenterWindowPoint = useCallback(() => {
    const el = selfRef.current;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }, []);

  // 잔상 생성
  useEffect(() => {
    if (!dragging) return;

    let raf: number | null = null;
    let last = 0;

    const tick = (t: number) => {
      if (t - last >= SAMPLE_INTERVAL) {
        last = t;
        setGhosts(prev => {
          const next: Ghost[] = [
            ...prev.slice(Math.max(0, prev.length - (GHOST_MAX - 1))),
            { id: Date.now(), x: x.get(), y: y.get(), bornAt: performance.now() },
          ];
          return next;
        });
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [dragging, x, y]);

  // 오래된 잔상 정리
  useEffect(() => {
    const timer = setInterval(() => {
      const now = performance.now();
      setGhosts(prev => prev.filter(g => now - g.bornAt < GHOST_LIFETIME));
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // 드래그 끝나면, 중앙으로 snap, 폭죽 터트린 후 복귀
  const handleDragEnd = useCallback(async () => {
    setDragging(false);

    const el = selfRef.current;
    const dropEl = dropRef.current;
    const root = containerRef.current;
    if (!el || !dropEl || !root) return;

    const me = el.getBoundingClientRect();
    const drop = dropEl.getBoundingClientRect();
    const isOver = isIntersecting(me, drop);
    if (!isOver) return;

    const centerX = drop.left + drop.width / 2;
    const centerY = drop.top + drop.height / 2;

    const rootRect = root.getBoundingClientRect();
    const toX = centerX - rootRect.left - me.width / 2;
    const toY = centerY - rootRect.top - me.height / 2;

    // 중앙으로
    await controls.start({
      x: toX,
      y: toY,
      transition: { type: 'spring', stiffness: 400, damping: 28 },
    });

    const p = getIconCenterWindowPoint();
    if (p && onOverDropArea) {
      onOverDropArea({ phase: 'drop', windowX: p.x, windowY: p.y });
    }

    await new Promise(res => setTimeout(res, 2000));
    const pos = calcXYFromPercent();
    if (pos) {
      await controls.start({
        ...pos,
        transition: { type: 'spring', stiffness: 300, damping: 26 },
      });
    }
  }, [
    controls,
    onOverDropArea,
    calcXYFromPercent,
    dropRef,
    containerRef,
    getIconCenterWindowPoint,
  ]);

  return (
    <>
      <AnimatePresence>
        {ghosts.map((g, idx) => (
          <motion.div
            key={g.id + '-' + idx}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              x: g.x,
              y: g.y,
              pointerEvents: 'none',
              opacity: 0.55,
              filter: 'blur(0.4px)',
            }}
            initial={{ scale: 1, opacity: 0.55 }}
            animate={{ scale: 0.96, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {cloneElement(icon)}
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        ref={selfRef}
        aria-label={label}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          touchAction: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 0,
          x,
          y,
        }}
        drag
        dragMomentum={false}
        onDragStart={() => setDragging(true)}
        onDrag={() => {}}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        {icon}
      </motion.div>
    </>
  );
}
