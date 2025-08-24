'use client';

import { BlinkingLogo } from '@/components/blinkingLogo/BlinkingLogo';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { useRef } from 'react';
import DotFireworksBackground, { DotFireworksHandle } from './canvas/canvas';
import { FIREWORK_SHAPE } from './canvas/Dot';
import * as S from './page.styles';

export default function HomePage() {
  const blinkRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<DotFireworksHandle>(null);

  return (
    <>
      <DotFireworksBackground
        ref={bgRef}
        dotRadius={14}
        spacing={28}
        burstEvery={0}
        decayPerSec={0}
        stampCoords={FIREWORK_SHAPE} // 코드 내 배열
        stampUnits="cells"
      />
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
