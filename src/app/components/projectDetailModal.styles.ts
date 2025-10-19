import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 40;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 120px;
  height: 91vh;
  z-index: 50;
  background-color: #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 80px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    padding: 0 28px;
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

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 20px;
  }
`;

export const ProjectInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 50px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex-direction: column;
    align-items: stretch;
    gap: 30px;
  }
`;

export const ProjectNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  flex: 6;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex: unset;
    gap: 20px;
    width: 100%;
  }
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

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex: unset;
    width: 100%;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 10px;
  }
`;

export const CarouselContainer = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  color: ${theme.colors.stroke};
`;
