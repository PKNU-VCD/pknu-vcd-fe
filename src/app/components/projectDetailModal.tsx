'use client';
import { Button } from '@/components/Button/Button';
import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import { ProjectDetail } from '@/types/project';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as S from './projectDetailModal.styles';

interface ProjectDetailModalProps {
  onClose: () => void;
  data: ProjectDetail;
}

export default function ProjectDetailModal({ data, onClose }: ProjectDetailModalProps) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!data.files || data.files.length === 0) return;

    const autoSlideTimer = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % data.files.length);
    }, 15000);

    return () => clearInterval(autoSlideTimer);
  }, [data.files]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  const handleOverlayClick = () => {
    router.back();
  };

  const handleImageClick = () => {
    if (!data.files || data.files.length === 0) return;
    setCurrentImageIndex(prev => (prev + 1) % data.files.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
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
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            margin: '0 120px',
            height: '55vh',
            zIndex: 50,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
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
                <p>{data.designerName.kr}</p>
                <S.EmailContainer>
                  <p>contact</p>
                  <p>{data.designerEmail}</p>
                </S.EmailContainer>
              </S.NameEmailContainer>
            </S.ProjectInfoContainer>

            {data.files && data.files.length > 0 && (
              <S.CarouselContainer>
                <S.CarouselImageWrapper onClick={handleImageClick}>
                  <S.CarouselImage
                    src={data.files[currentImageIndex].url}
                    alt={`${data.projectName.kr} - ${currentImageIndex + 1}`}
                  />
                </S.CarouselImageWrapper>

                <S.DotsContainer>
                  {data.files.map((_, index) => (
                    <S.Dot
                      key={index}
                      active={index === currentImageIndex}
                      onClick={() => handleDotClick(index)}
                    />
                  ))}
                </S.DotsContainer>
              </S.CarouselContainer>
            )}

            <S.DescriptionContainer>
              {data.description.kr}
              <TranslationPanel text={data.description.en} />
            </S.DescriptionContainer>
          </S.ModalContainer>
        </motion.div>

        <motion.div
          key="overlay"
          onClick={handleOverlayClick}
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
