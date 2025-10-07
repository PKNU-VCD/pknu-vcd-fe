'use client';

import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { useEffect, useRef, useState } from 'react';
import DotFireworksBackground, { DotFireworksHandle } from './canvas/canvas';
import { FIREWORK_SHAPE, FIREWORK_SHAPE_LARGE } from './canvas/Dot';
import * as S from './page.styles';

export default function HomePage() {
  const blinkRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<DotFireworksHandle>(null);
  const splashFireworkRef = useRef<DotFireworksHandle>(null);

  // 반응형 dotRadius 계산
  const [dotRadius, setDotRadius] = useState(8);
  const [showSplashFirework, setShowSplashFirework] = useState(() => {
    // Initialize from sessionStorage
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('splashComplete') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const updateDotRadius = () => {
      const width = window.innerWidth;

      if (width >= 1920) {
        setDotRadius(8);
      } else if (width <= 375) {
        setDotRadius(6.5);
      } else {
        const ratio = (width - 375) / (1920 - 375);
        const diameter = 13 + (16 - 13) * ratio;
        setDotRadius(diameter / 2);
      }
    };

    updateDotRadius();
    window.addEventListener('resize', updateDotRadius);

    return () => window.removeEventListener('resize', updateDotRadius);
  }, []);

  useEffect(() => {
    // Only run once when component mounts
    if (showSplashFirework && splashFireworkRef.current) {
      sessionStorage.removeItem('splashComplete');

      const { OPENING_1, OPENING_2, OPENING_3, OPENING_4 } = require('../splash/opening');
      const centerX = window.innerWidth / 2;
      // Calculate Y position: center moved up by 70% = centerY - (0.7 * window.innerHeight)
      const centerY = window.innerHeight / 2 - window.innerHeight * 0.7;

      console.log('Restoring firework at', centerX, centerY);

      splashFireworkRef.current.triggerStampAtWindowPx(centerX, centerY, {
        color: '#00AEEF',
        units: 'cells',
        scaleCells: 1,
        thicken: 0,
        customCoords: OPENING_1,
      });
      splashFireworkRef.current.triggerStampAtWindowPx(centerX, centerY, {
        color: '#00AEEF',
        units: 'cells',
        scaleCells: 1,
        thicken: 0,
        customCoords: OPENING_2,
      });
      splashFireworkRef.current.triggerStampAtWindowPx(centerX, centerY, {
        color: '#00AEEF',
        units: 'cells',
        scaleCells: 1,
        thicken: 0,
        customCoords: OPENING_3,
      });
      splashFireworkRef.current.triggerStampAtWindowPx(centerX, centerY, {
        color: '#FFFF85',
        units: 'cells',
        scaleCells: 1,
        thicken: 0,
        customCoords: OPENING_4,
      });
    }
  }, [showSplashFirework]);

  return (
    <>
      <DotFireworksBackground
        ref={bgRef}
        dotRadius={dotRadius}
        spacing={dotRadius * 2}
        burstEvery={0}
        stampCoords={FIREWORK_SHAPE} // 코드 내 배열
        stampUnits="cells"
      />
      {showSplashFirework && (
        <DotFireworksBackground
          ref={splashFireworkRef}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      )}
      <S.Wrapper>
        <Header />
        <S.MainSection ref={mainRef}>
          <BlinkingLogo blinkRef={blinkRef} data-drag-root />
          <FloatingDraggable
            icon={<S.FloatingOne />}
            initialPercent={{ x: 20, y: 60 }}
            dropRef={blinkRef}
            containerRef={mainRef}
            label="floating one"
            onOverDropArea={({ windowX, windowY }) => {
              // First firework at drop position (small + large)
              bgRef.current?.triggerStampAtWindowPx(windowX, windowY, {
                color: '#9FFFB9',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE,
              });
              bgRef.current?.triggerStampAtWindowPx(windowX, windowY, {
                color: '#D2FFDE',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });

              // Second firework at random position
              const randomX2 = Math.random() * window.innerWidth;
              const randomY2 = Math.random() * window.innerHeight;
              bgRef.current?.triggerStampAtWindowPx(randomX2, randomY2, {
                color: '#D2FFDE',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });

              // Third firework at random position
              const randomX3 = Math.random() * window.innerWidth;
              const randomY3 = Math.random() * window.innerHeight;
              bgRef.current?.triggerStampAtWindowPx(randomX3, randomY3, {
                color: '#D2FFDE',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });
            }}
          />
          <FloatingDraggable
            icon={<S.FloatingTwo />}
            initialPercent={{ x: 40, y: 58 }}
            containerRef={mainRef}
            dropRef={blinkRef}
            label="floating two"
            onOverDropArea={({ windowX, windowY }) => {
              // First firework at drop position (small + large)
              bgRef.current?.triggerStampAtWindowPx(windowX, windowY, {
                color: '#FFEF60',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE,
              });
              bgRef.current?.triggerStampAtWindowPx(windowX, windowY, {
                color: '#FFFF85',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });

              // Second firework at random position
              const randomX2 = Math.random() * window.innerWidth;
              const randomY2 = Math.random() * window.innerHeight;
              bgRef.current?.triggerStampAtWindowPx(randomX2, randomY2, {
                color: '#FFFF85',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });

              // Third firework at random position
              const randomX3 = Math.random() * window.innerWidth;
              const randomY3 = Math.random() * window.innerHeight;
              bgRef.current?.triggerStampAtWindowPx(randomX3, randomY3, {
                color: '#FFFF85',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });
            }}
          />
          <FloatingDraggable
            icon={<S.FloatingThree />}
            initialPercent={{ x: 80, y: 60 }}
            dropRef={blinkRef}
            containerRef={mainRef}
            label="floating three"
            onOverDropArea={({ windowX, windowY }) => {
              // First firework at drop position (small + large)
              bgRef.current?.triggerStampAtWindowPx(windowX, windowY, {
                color: '#90FBFB',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE,
              });
              bgRef.current?.triggerStampAtWindowPx(windowX, windowY, {
                color: '#CDFFFF',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });

              // Second firework at random position
              const randomX2 = Math.random() * window.innerWidth;
              const randomY2 = Math.random() * window.innerHeight;
              bgRef.current?.triggerStampAtWindowPx(randomX2, randomY2, {
                color: '#CDFFFF',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });

              // Third firework at random position
              const randomX3 = Math.random() * window.innerWidth;
              const randomY3 = Math.random() * window.innerHeight;
              bgRef.current?.triggerStampAtWindowPx(randomX3, randomY3, {
                color: '#CDFFFF',
                units: 'cells',
                scaleCells: 1,
                thicken: 0.25,
                customCoords: FIREWORK_SHAPE_LARGE,
              });
            }}
          />

          <S.SubTitle>
            <S.Text>{`The 37th PKNU Visual Communication Design Major Graduation Exhibition`}</S.Text>
            <S.Text>{`제 37회 2025 국립부경대학교 시각디자인전공 졸업전시회`}</S.Text>
          </S.SubTitle>
        </S.MainSection>
        <S.FooterSection>
          <Footer />
        </S.FooterSection>
      </S.Wrapper>
    </>
  );
}
