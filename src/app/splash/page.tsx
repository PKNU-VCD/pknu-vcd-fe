'use client';

import { useEffect, useRef, useState } from 'react';
import DotFireworksBackground, { DotFireworksHandle } from '../main/canvas/canvas';
import { OPENING_1, OPENING_2, OPENING_3, OPENING_4, OPENING_5 } from './opening';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import { FIREWORK_SHAPE, FIREWORK_SHAPE_LARGE } from '../main/canvas/Dot';
import * as S from '../main/page.styles';

export default function SplashPage() {
  const bgRef = useRef<DotFireworksHandle>(null);
  const fireworkRef = useRef<DotFireworksHandle>(null);
  const opening3Ref = useRef<DotFireworksHandle>(null);
  const opening5Ref = useRef<DotFireworksHandle>(null);
  const blinkRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [isMovingUp, setIsMovingUp] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [dotRadius, setDotRadius] = useState(8);
  const [opening3Opacity, setOpening3Opacity] = useState(0.5);
  const [opening3Color, setOpening3Color] = useState('#00AEEF');
  const [removeTransform, setRemoveTransform] = useState(false);

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

    const redrawOpening5 = () => {
      opening5Ref.current?.triggerStampAtWindowPx(centerX, centerY, {
        color: '#D2FFDE',
        units: 'cells',
        scaleCells: 1,
        thicken: 0,
        customCoords: OPENING_5,
      });
    };

    if (currentStep === 0) {
      // OPENING_5 immediately - stays fixed in center
      setTimeout(() => {
        console.log('Rendering OPENING_5 at', centerX, centerY, 'with', OPENING_5.length, 'dots');
        redrawOpening5();
        setCurrentStep(1);
      }, 0);
    } else if (currentStep === 1) {
      // OPENING_1 immediately
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_1,
        });
        redrawOpening5(); // Redraw to keep visible
        setCurrentStep(2);
      }, 0);
    } else if (currentStep === 2) {
      // OPENING_2 after 100ms
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_2,
        });
        redrawOpening5(); // Redraw to keep visible
        setCurrentStep(3);
      }, 100);
    } else if (currentStep === 3) {
      // OPENING_3 after 100ms - on separate layer for opacity control
      setTimeout(() => {
        opening3Ref.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_3,
        });
        redrawOpening5(); // Redraw to keep visible
        setCurrentStep(4);
        // Start opacity animation from 0.5 to 1
        setTimeout(() => setOpening3Opacity(1), 50);
      }, 100);
    } else if (currentStep === 4) {
      // OPENING_4 after 100ms
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#FFFF85',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_4,
        });
        redrawOpening5(); // Redraw to keep visible
        setCurrentStep(5);
      }, 100);
    } else if (currentStep === 5) {
      // Move up after all openings appear
      setTimeout(() => {
        setIsMovingUp(true);
        setCurrentStep(6);
      }, 500);
    } else if (currentStep === 6) {
      // After move animation completes, redraw fireworks at the new position to align with grid
      setTimeout(() => {
        // Calculate the new Y position after -60% transform
        const newCenterY = centerY - (window.innerHeight * 0.6);

        // Remove transform first
        setRemoveTransform(true);

        // Clear and redraw all fireworks at new aligned position
        fireworkRef.current?.clearCanvas();
        opening3Ref.current?.clearCanvas();

        setTimeout(() => {
          // Redraw OPENING_1, 2, 4 at new position
          fireworkRef.current?.triggerStampAtWindowPx(centerX, newCenterY, {
            color: '#00AEEF',
            units: 'cells',
            scaleCells: 1,
            thicken: 0,
            customCoords: OPENING_1,
          });
          fireworkRef.current?.triggerStampAtWindowPx(centerX, newCenterY, {
            color: '#00AEEF',
            units: 'cells',
            scaleCells: 1,
            thicken: 0,
            customCoords: OPENING_2,
          });
          fireworkRef.current?.triggerStampAtWindowPx(centerX, newCenterY, {
            color: '#FFFF85',
            units: 'cells',
            scaleCells: 1,
            thicken: 0,
            customCoords: OPENING_4,
          });

          // Redraw OPENING_3 with new color at new position
          opening3Ref.current?.triggerStampAtWindowPx(centerX, newCenterY, {
            color: '#D2FFDE',
            units: 'cells',
            scaleCells: 1,
            thicken: 0,
            customCoords: OPENING_3,
          });

          // Redraw OPENING_5 to keep visible
          redrawOpening5();
        }, 50);

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

      {/* OPENING_5 layer - stays fixed in center, does not move up, below other fireworks */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <DotFireworksBackground
          ref={opening5Ref}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      </div>

      {/* Animated firework layer - OPENING_1, 2, 4 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          transition: removeTransform ? 'none' : 'transform 1s ease-out',
          transform: removeTransform ? 'translateY(0)' : (isMovingUp ? 'translateY(-60%)' : 'translateY(0)'),
          pointerEvents: 'none',
          zIndex: 2,
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

      {/* OPENING_3 layer with opacity animation */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          transition: removeTransform ? 'none' : 'transform 1s ease-out, opacity 2s ease-out',
          transform: removeTransform ? 'translateY(0)' : (isMovingUp ? 'translateY(-60%)' : 'translateY(0)'),
          opacity: opening3Opacity,
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        <DotFireworksBackground
          ref={opening3Ref}
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
                    color: '#D2FFDE',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY + 150, {
                    color: '#D2FFDE',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
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
                    color: '#FFFF85',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY + 150, {
                    color: '#FFFF85',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
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
                    color: '#CDFFFF',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
                  });
                  bgRef.current?.triggerStampAtWindowPx(windowX + 500, windowY, {
                    color: '#CDFFFF',
                    units: 'cells',
                    scaleCells: 1,
                    thicken: 0.25,
                    customCoords: FIREWORK_SHAPE_LARGE,
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
