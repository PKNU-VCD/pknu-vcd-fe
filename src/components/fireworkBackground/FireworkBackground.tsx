'use client';

import DotFireworksBackground, { DotFireworksHandle } from '@/app/main/canvas/canvas';
import { FIREWORK_SHAPE_LARGE } from '@/app/main/canvas/Dot';
import { useEffect, useRef } from 'react';
import * as S from './FireworkBackground.styles';

interface FireworkBackgroundProps {
  color?: string;
  dotRadius?: number;
}

const FireworkBackground = ({ color = '#D2FFDE', dotRadius = 8 }: FireworkBackgroundProps) => {
  const fireworkRef = useRef<DotFireworksHandle>(null);

  useEffect(() => {
    const fireworkX = window.innerWidth / 2;
    const fireworkY = 269 + 59;
    const timer = setTimeout(() => {
      if (fireworkRef.current) {
        fireworkRef.current.triggerStampAtWindowPx(fireworkX, fireworkY, {
          color,
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: FIREWORK_SHAPE_LARGE,
        });
      }
    }, 500);

    const handleResize = () => {
      if (fireworkRef.current) {
        fireworkRef.current.triggerStampAtWindowPx(fireworkX, fireworkY, {
          color,
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: FIREWORK_SHAPE_LARGE,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [color]);

  return (
    <S.FireworkContainer>
      <DotFireworksBackground
        ref={fireworkRef}
        dotRadius={dotRadius}
        spacing={dotRadius * 2}
        burstEvery={0}
        decayPerSec={0}
        baseColor="#F2F2F2"
      />
    </S.FireworkContainer>
  );
};

export default FireworkBackground;
