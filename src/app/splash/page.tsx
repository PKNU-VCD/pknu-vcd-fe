'use client';

import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { useEffect, useRef, useState } from 'react';
import DotFireworksBackground, { DotFireworksHandle } from '../main/canvas/canvas';
import { FIREWORK_SHAPE, FIREWORK_SHAPE_LARGE } from '../main/canvas/Dot';
import * as S from '../main/page.styles';
import { OPENING_1, OPENING_2, OPENING_3, OPENING_4, OPENING_5, PINK_DOT } from './opening';
import * as Splash from './page.styles';

export default function SplashPage() {
  const bgRef = useRef<DotFireworksHandle>(null);
  const fireworkRef = useRef<DotFireworksHandle>(null);
  const opening3Ref = useRef<DotFireworksHandle>(null);
  const opening5Ref = useRef<DotFireworksHandle>(null);
  const pinkDotRef = useRef<DotFireworksHandle>(null);
  const blinkRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [isMovingUp, setIsMovingUp] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [dotRadius, setDotRadius] = useState(8);
  const [opening3Opacity, setOpening3Opacity] = useState(0.5);
  const [removeTransform, setRemoveTransform] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [wordPositions, setWordPositions] = useState<{ x: number; y: number }[]>([]);
  const [visibleWordsCount, setVisibleWordsCount] = useState(0);
  const questionTexts = ['당신은', '어떤', '가능성을', '꿈꾸고', '있나요?'];

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
      }, 100);
    } else if (currentStep === 1) {
      // OPENING_1 with delay to avoid re-render clearing
      setTimeout(() => {
        fireworkRef.current?.triggerStampAtWindowPx(centerX, centerY, {
          color: '#00AEEF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: OPENING_1,
        });
        // Redraw after render cycle completes
        requestAnimationFrame(() => redrawOpening5());
        setCurrentStep(2);
      }, 50);
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
      }, 800);
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
      }, 800);
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
      }, 800);
    } else if (currentStep === 5) {
      // Generate random positions for each word and start showing them
      setTimeout(() => {
        const positions = questionTexts.map(() => ({
          x: Math.random() * (window.innerWidth - 200),
          y: Math.random() * (window.innerHeight - 100),
        }));
        setWordPositions(positions);
        setShowQuestion(true);
        // Don't move to step 6 yet - wait for all words to appear
      }, 800);
    } else if (currentStep === 6) {
      // Move up after red dot appears
      setTimeout(() => {
        setOpening3Opacity(0);
        setIsMovingUp(true);
        setCurrentStep(7);
      }, 500);
    } else if (currentStep === 7) {
      // After move animation completes, redraw fireworks at the new position to align with grid
      setTimeout(() => {
        // Calculate the new Y position after -70% transform
        const newCenterY = centerY - window.innerHeight * 0.7;

        setOpening3Opacity(0);

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

          fireworkRef.current?.triggerStampAtWindowPx(centerX, newCenterY, {
            color: '#D2FFDE',
            units: 'cells',
            scaleCells: 1,
            thicken: 0,
            customCoords: OPENING_3,
          });

          redrawOpening5();
        }, 50);

        setShowMain(true);
      }, 1000);
    }
  }, [currentStep]);

  // 단어별 애니메이션
  useEffect(() => {
    if (showQuestion && visibleWordsCount < questionTexts.length) {
      const timer = setTimeout(() => {
        setVisibleWordsCount(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showQuestion, visibleWordsCount, questionTexts.length]);

  // 각 단어가 나타날 때 캔버스에 핑크 dot 그리기
  useEffect(() => {
    if (visibleWordsCount > 0 && wordPositions.length > 0) {
      const index = visibleWordsCount - 1;
      const pos = wordPositions[index];
      if (pos) {
        pinkDotRef.current?.triggerStampAtWindowPx(pos.x, pos.y, {
          color: '#FF74FF',
          units: 'cells',
          scaleCells: 1,
          thicken: 0,
          customCoords: PINK_DOT,
        });
      }
    }
  }, [visibleWordsCount, wordPositions]);

  useEffect(() => {
    if (visibleWordsCount === questionTexts.length && currentStep === 5) {
      const timer = setTimeout(() => {
        setCurrentStep(6);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [visibleWordsCount, questionTexts.length, currentStep]);

  useEffect(() => {
    if (showMain) {
      setShowQuestion(false);
    }
  }, [showMain]);

  return (
    <>
      {/* Static background canvas */}
      <DotFireworksBackground
        ref={bgRef}
        dotRadius={dotRadius}
        spacing={dotRadius * 2}
        burstEvery={0}
        decayPerSec={0}
        stampCoords={FIREWORK_SHAPE}
        stampUnits="cells"
      />

      {/* OPENING_5 layer - stays fixed in center, does not move up, below other fireworks */}
      <Splash.Opening5Layer>
        <DotFireworksBackground
          ref={opening5Ref}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      </Splash.Opening5Layer>

      {/* Animated firework layer - OPENING_1, 2, 4 */}
      <Splash.CanvasLayer zIndex={2} isMovingUp={isMovingUp} removeTransform={removeTransform}>
        <DotFireworksBackground
          ref={fireworkRef}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      </Splash.CanvasLayer>

      {/* OPENING_3 layer with opacity animation */}
      <Splash.CanvasLayer
        zIndex={3}
        isMovingUp={isMovingUp}
        removeTransform={removeTransform}
        opacity={opening3Opacity}
      >
        <DotFireworksBackground
          ref={opening3Ref}
          dotRadius={dotRadius}
          spacing={dotRadius * 2}
          burstEvery={0}
          decayPerSec={0}
          baseColor="transparent"
        />
      </Splash.CanvasLayer>

      {/* Pink dot layer for question text */}
      {showQuestion && (
        <Splash.CanvasLayer zIndex={4} isMovingUp={isMovingUp} removeTransform={removeTransform}>
          <DotFireworksBackground
            ref={pinkDotRef}
            dotRadius={dotRadius}
            spacing={dotRadius * 2}
            burstEvery={0}
            decayPerSec={0}
            baseColor="transparent"
          />
        </Splash.CanvasLayer>
      )}

      {/* Main page content with fade-in */}
      {showMain && (
        <Splash.MainContentWrapper>
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
        </Splash.MainContentWrapper>
      )}

      {/* Question text - each word at random position (dots drawn on canvas) */}
      {showQuestion &&
        questionTexts.slice(0, visibleWordsCount).map((text, index) => (
          <Splash.QuestionWord
            key={index}
            x={wordPositions[index]?.x || 0}
            y={wordPositions[index]?.y || 0}
            isMovingUp={isMovingUp}
            removeTransform={removeTransform}
          >
            <Splash.QuestionText>{text}</Splash.QuestionText>
          </Splash.QuestionWord>
        ))}
    </>
  );
}
