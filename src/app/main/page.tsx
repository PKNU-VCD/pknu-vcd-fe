'use client';

import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { useEffect, useRef, useState } from 'react';
import { OPENING_3, OPENING_4, OPENING_5 } from '../splash/opening';
import DotFireworksBackground, { DotFireworksHandle } from './canvas/canvas';
import { FIREWORK_SHAPE, FIREWORK_SHAPE_LARGE } from './canvas/Dot';
import * as S from './page.styles';

export default function HomePage() {
  const blinkRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<DotFireworksHandle>(null);
  const splashFireworkRef = useRef<DotFireworksHandle>(null);
  const opening5Ref = useRef<DotFireworksHandle>(null);

  // 반응형 dotRadius 계산
  const [dotRadius, setDotRadius] = useState(8);
  const [showSplashFirework, setShowSplashFirework] = useState(true);

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
    const renderOpeningFireworks = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const movedUpY = centerY - window.innerHeight * 0.7;

      // OPENING_1, 2, 3, 4 - 이동
      if (splashFireworkRef.current) {
        console.log('Rendering OPENING 1-4 fireworks at', centerX, movedUpY);
        splashFireworkRef.current.triggerStampAtWindowPx(centerX, movedUpY, {
          color: '#D2FFDE',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_3,
        });
        splashFireworkRef.current.triggerStampAtWindowPx(centerX, movedUpY, {
          color: '#FFFF85',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_4,
        });
      }

      // OPENING_5 - stays in center
      if (opening5Ref.current) {
        console.log('Rendering OPENING 5 firework at center', centerX, centerY);

        opening5Ref.current.triggerStampAtWindowPx(centerX, centerY, {
          color: '#D2FFDE',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_5,
        });
      }
    };

    const timer = setTimeout(renderOpeningFireworks, 150);

    window.addEventListener('resize', renderOpeningFireworks);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', renderOpeningFireworks);
    };
  }, []);

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
        <>
          <DotFireworksBackground
            ref={opening5Ref}
            dotRadius={dotRadius}
            spacing={dotRadius * 2}
            burstEvery={0}
            decayPerSec={0}
            baseColor="transparent"
          />
          <DotFireworksBackground
            ref={splashFireworkRef}
            dotRadius={dotRadius}
            spacing={dotRadius * 2}
            burstEvery={0}
            decayPerSec={0}
            baseColor="transparent"
          />
        </>
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
