import { Slide } from '@/types/slide.type';
import { useCallback, useEffect, useState } from 'react';
import * as S from './Carousel.styles';

interface CarouselProps {
  /** 슬라이드 Url */
  slides: Slide[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedSlides = [...slides, slides[0]];

  const goToSlide = (index: number) => {
    const nextIndex =
      (index + extendedSlides.length) % extendedSlides.length === 0
        ? extendedSlides.length - 1
        : (index + extendedSlides.length) % extendedSlides.length;
    setCurrentIndex(nextIndex);
  };

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex(0);
      setIsTransitioning(false);
    }, 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex === extendedSlides.length - 1) {
        resetIndexAndTransition();
      }
      setCurrentIndex(prev => (prev + 1) % extendedSlides.length);
      setIsTransitioning(true);
    }, 2500);

    return () => clearInterval(timer);
  }, [currentIndex, extendedSlides.length, resetIndexAndTransition]);

  return (
    <S.Wrapper>
      <S.SlidesContainer $currentIndex={currentIndex} $isTransitioning={isTransitioning}>
        {extendedSlides.map((slide, index) =>
          slide.type === 'image' ? (
            <S.ImageContainer key={index} src={slide.url} />
          ) : (
            <S.VideoContainer
              key={index}
              src={slide.url}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ),
        )}
      </S.SlidesContainer>
      <S.DotsContainer>
        {slides.map((_, index) => (
          <S.DotContainer
            key={index}
            onClick={() => goToSlide(index)}
            $isActive={currentIndex === slides.length ? index === 0 : index === currentIndex}
          />
        ))}
      </S.DotsContainer>
    </S.Wrapper>
  );
};
