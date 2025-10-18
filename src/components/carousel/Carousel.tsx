import { Slide } from '@/types/slide.type';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import * as S from './Carousel.styles';

interface CarouselProps {
  /** 슬라이드 Url */
  slides: Slide[];
  /** 커서가 들어오면 일시정지 */
  pauseOnHover?: boolean;
}

export const Carousel = ({ slides, pauseOnHover = true }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const extendedSlides = [...slides, slides[0]];
  const lastIndex = extendedSlides.length - 1;
  const displayIndex = currentIndex === lastIndex ? 0 : currentIndex;

  const snapTo = (index: number) => {
    setIsTransitioning(false);
    setCurrentIndex(index);
  };

  const animateTo = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const goToSlide = (index: number) => {
    if (currentIndex === lastIndex && index !== 0) {
      snapTo(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          animateTo(index);
        });
      });
      return;
    }

    animateTo(index);
  };

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      snapTo(0);
    }, 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      if (currentIndex === lastIndex) {
        resetIndexAndTransition();
      }
      animateTo((prev => (prev + 1) % extendedSlides.length)(currentIndex));
    }, 2500);

    return () => clearInterval(timer);
  }, [currentIndex, extendedSlides.length, lastIndex, resetIndexAndTransition, isPaused]);

  return (
    <S.Wrapper
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <S.SlidesContainer $currentIndex={currentIndex} $isTransitioning={isTransitioning}>
        {extendedSlides.map((slide, index) =>
          slide.type === 'image' ? (
            <S.ImageWrapper key={index}>
              <Image
                src={slide.url}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={0}
                quality={75}
                priority={index === 0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </S.ImageWrapper>
          ) : (
            <S.VideoWrapper key={index}>
              <S.VideoElement controls autoPlay loop muted playsInline>
                <source src={slide.url} type="video/mp4" />
                영상을 지원하지 않는 브라우저입니다.
              </S.VideoElement>
            </S.VideoWrapper>
          ),
        )}
      </S.SlidesContainer>
      <S.DotsContainer>
        {slides.map((_, index) => (
          <S.DotContainer
            key={index}
            onClick={() => goToSlide(index)}
            $isActive={displayIndex === index}
          />
        ))}
      </S.DotsContainer>
    </S.Wrapper>
  );
};
