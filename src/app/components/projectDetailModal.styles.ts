import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 40;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  overflow-y: auto;
  flex: 1;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.lightGray};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkGray};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 30px;
`;

export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled.span`
  color: ${theme.colors.darkGray};
  font-size: 1.125rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  gap: 30px;
`;

export const ProjectInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
`;

export const ProjectNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  flex: 6;
`;

export const EnglishName = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  color: ${theme.colors.stroke};
`;

export const KoreanName = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
  color: ${theme.colors.stroke};
`;

export const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  flex: 4;
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;

export const CarouselContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  width: 100%;
`;

export const CarouselImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;
  cursor: pointer;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
`;

export const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.active ? theme.colors.darkGray : theme.colors.lightGray)};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background-color: ${theme.colors.darkGray};
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  color: ${theme.colors.stroke};
`;
