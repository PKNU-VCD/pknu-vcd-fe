'use client';

import { useEffect, useRef, useState } from 'react';
import DotFireworksBackground, { DotFireworksHandle } from '../main/canvas/canvas';
import { OPENING_1, OPENING_2, OPENING_3, OPENING_4 } from './opening';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import { FIREWORK_SHAPE, FIREWORK_SHAPE_LARGE } from '../main/canvas/Dot';
import * as S from '../main/page.styles';

export default function SplashPage() {
  const bgRef = useRef<DotFireworksHandle>(null);
  const fireworkRef = useRef<DotFireworksHandle>(null);
  const opening2Ref = useRef<DotFireworksHandle>(null);
  const blinkRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [isMovingUp, setIsMovingUp] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [dotRadius, setDotRadius] = useState(8);
  const [opening2Opacity, setOpening2Opacity] = useState(0.5);
  const [opening2Color, setOpening2Color] = useState('#00AEEF');

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
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (currentStep === 0) {
      // OPENING_1 immediately
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_1,
        });
        setCurrentStep(1);
      }, 0);
    } else if (currentStep === 1) {
      // OPENING_2 after 100ms - on separate layer for opacity control
      setTimeout(() => {
        opening2Ref.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_2,
        });
        setCurrentStep(2);
        // Start opacity animation from 0.5 to 1
        setTimeout(() => setOpening2Opacity(1), 50);
      }, 100);
    } else if (currentStep === 2) {
      // OPENING_3 after 100ms
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_3,
        });
        setCurrentStep(3);
      }, 100);
    } else if (currentStep === 3) {
      // OPENING_4 after 100ms
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#FFFF85',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_4,
        });
        setCurrentStep(4);
      }, 100);
    } else if (currentStep === 4) {
      // Move up after all openings appear
      setTimeout(() => {
        setIsMovingUp(true);
        setCurrentStep(5);
      }, 500);
    } else if (currentStep === 5) {
      // Show main page with fade-in after move up animation
      setTimeout(() => {
        // Change OPENING_2 color to D2FFDE
        setOpening2Color('#D2FFDE');
        // Redraw OPENING_2 with new color
        opening2Ref.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#D2FFDE',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_2,
        });
        setShowMain(true);
      }, 1000);
    }
  }, [currentStep]);

  return (
    <>
      {/* Static background canvas */}
      <DotFireworksBackground
        ref={bgRef}
        dotRadius={dotRadius}
        spacing={dotRadius * 2}
        burstEvery={0}
        stampCoords={FIREWORK_SHAPE}
        stampUnits="cells"
      />

      {/* Animated firework layer - OPENING_1, 3, 4 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          transition: 'transform 1s ease-out',
          transform: isMovingUp ? 'translateY(-60%)' : 'translateY(0)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <DotFireworksBackground
          ref={fireworkRef}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      </div>

      {/* OPENING_2 layer with opacity animation */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          transition: 'transform 1s ease-out, opacity 2s ease-out',
          transform: isMovingUp ? 'translateY(-60%)' : 'translateY(0)',
          opacity: opening2Opacity,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <DotFireworksBackground
          ref={opening2Ref}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      </div>

      {/* Main page content with fade-in */}
      {showMain && (
        <div
          style={{
            opacity: 0,
            animation: 'fadeIn 0.5s ease-out forwards',
            position: 'relative',
            zIndex: 10,
          }}
        >
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
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY + 100, {
                    color: '#9FFFB9',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY + 150, {
                    color: '#D2FFDE',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 800, windowY - 100, {
                    color: '#9FFFB9',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 800, windowY - 100, {
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
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY + 150, {
                    color: '#FFEF60',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY + 150, {
                    color: '#FFFF85',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 800, windowY - 100, {
                    color: '#FFEF60',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 800, windowY - 100, {
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
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY, {
                    color: '#90FBFB',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY, {
                    color: '#CDFFFF',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 800, windowY - 100, {
                    color: '#90FBFB',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 800, windowY - 100, {
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
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
