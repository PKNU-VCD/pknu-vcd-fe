'use client';
import { Button } from '@/components/Button/Button';
import { Carousel } from '@/components/carousel/Carousel';
import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import { ProjectDetail } from '@/types/project';
import { Slide } from '@/types/slide.type';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as S from './projectDetailModal.styles';

// 모듈 스코프로 hoist된 Motion 컴포넌트 (리렌더 시 재생성 방지)
const MotionModalWrapper = motion.create(S.ModalWrapper);

interface ProjectDetailModalProps {
  onClose: () => void;
  data: ProjectDetail;
}

export default function ProjectDetailModal({ data, onClose }: ProjectDetailModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const getFileType = (url: string): 'image' | 'video' => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    const lowerUrl = url.toLowerCase();
    return videoExtensions.some(ext => lowerUrl.endsWith(ext)) ? 'video' : 'image';
  };

  const slides: Slide[] =
    data.files?.map(file => ({
      url: file.url,
      type: getFileType(file.url),
    })) || [];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPosition = body.style.position;
    const prevTop = body.style.top;
    const prevWidth = body.style.width;

    const scrollY = window.scrollY;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      body.style.overflow = prevOverflow;
      body.style.position = prevPosition;
      body.style.top = prevTop;
      body.style.width = prevWidth;
      window.scrollTo(0, scrollY);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  return (
    <>
      <AnimatePresence mode="sync">
        <MotionModalWrapper
          key="modal"
          initial={{ y: '100%', opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            opacity: { duration: 0.3 },
          }}
          onClick={handleWrapperClick}
        >
          <S.ModalContainer onClick={e => e.stopPropagation()}>
            <S.ModalHeader>
              <S.CloseButton onClick={handleClose}>
                <S.CloseIcon>✕</S.CloseIcon>
              </S.CloseButton>
            </S.ModalHeader>

            <S.ButtonContainer>
              {data.categories &&
                data.categories.map((category: string, index: number) => (
                  <Button key={index} variant="primary">
                    {category}
                  </Button>
                ))}
            </S.ButtonContainer>

            <S.ProjectInfoContainer>
              <S.ProjectNameContainer>
                <S.EnglishName>{data.projectName.en}</S.EnglishName>
                <S.KoreanName>{data.projectName.kr}</S.KoreanName>
              </S.ProjectNameContainer>

              <S.NameEmailContainer>
                <p style={{ alignSelf: 'flex-start' }}>{data.designerName.kr}</p>
                <S.EmailContainer>
                  <p>contact</p>
                  <p>{data.designerEmail}</p>
                </S.EmailContainer>
              </S.NameEmailContainer>
            </S.ProjectInfoContainer>

            {slides.length > 0 && (
              <S.CarouselContainer>
                <Carousel slides={slides} pauseOnHover={true} />
              </S.CarouselContainer>
            )}

            <S.DescriptionContainer>
              {data.description.kr}
              <TranslationPanel text={data.description.en} />
            </S.DescriptionContainer>
          </S.ModalContainer>
        </MotionModalWrapper>

        <motion.div
          key="overlay"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
            zIndex: 40,
          }}
        />
      </AnimatePresence>
    </>
  );
}
