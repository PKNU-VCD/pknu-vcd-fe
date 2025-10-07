'use client';

import { RefObject } from 'react';
import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { DotFireworksHandle } from '@/app/main/canvas/canvas';
import { FIREWORK_SHAPE, FIREWORK_SHAPE_LARGE } from '@/app/main/canvas/Dot';
import * as S from '@/app/main/page.styles';

type MainContentProps = {
  blinkRef: RefObject<HTMLDivElement>;
  mainRef: RefObject<HTMLDivElement>;
  bgRef: RefObject<DotFireworksHandle>;
};

export default function MainContent({ blinkRef, mainRef, bgRef }: MainContentProps) {
  return (
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
  );
}
