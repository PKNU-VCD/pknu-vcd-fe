import { theme } from '@/styles/theme';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText, Wrapper } from '../common.styles';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollVertical = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

export const IntroductionWrapper = styled(CommonWrapper)`
  margin-top: 120px;
  margin-bottom: 120px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IntroductionLogoContainer = styled(LogoContainer)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
  }
`;

export const IntroductionLogoText = styled(LogoText)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: center;
  }
`;

export const UnionWrapper = styled.div`
  position: absolute;
  top: 48%;
  left: 14%;
  transform: translate(-50%, -50%);
`;

export const ButtonListContainer = styled.div`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    width: 100%;
  }
`;

export const IntroductionContainer = styled(Wrapper)`
  justify-content: space-between;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 80px;
    flex-direction: column;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 30px;
    margin-bottom: 40px;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const IntroductionSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  img,
  svg {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-bottom: 40px;
  }
`;

export const MobileAsideContainer = styled.div`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${theme.colors.stroke};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    padding: 0 28px;
  }
`;

export const ContentTitle = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const ContentDescription = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  white-space: pre-line;
`;

export const IntroImageContainer = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1120/516.92;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ParticipantsContainer = styled(Wrapper)`
  margin-top: 120px;
  margin-bottom: 120px;
  flex-direction: row;
  align-items: flex-start;
  gap: 100px;
  width: 100%;
  min-width: 0;
  overflow-x: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 60px;
    margin-bottom: 60px;
    gap: 80px;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-shrink: 0;
`;

export const KoreanText = styled.p`
  white-space: nowrap;
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    font-size: ${theme.typography.medium.fontSize};
    font-weight: ${theme.typography.medium.fontWeight};
    line-height: ${theme.typography.medium.lineHeight};
    letter-spacing: ${theme.typography.medium.letterSpacing};
  }
`;

export const EnglishText = styled.p`
  color: ${theme.colors.darkGray};
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  flex: 1;
  min-width: 0;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 60px;
  }
`;

export const ParticipantItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${theme.colors.stroke};
  min-width: 0;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 40px;
  }
`;

export const ParticipantType = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const ParticipantContent = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

export const FadedTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    height: 180px;
  }
`;

export const ScrollingWrapper = styled.div<{ $speed?: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  white-space: nowrap;
  animation: ${scroll} ${({ $speed }) => $speed || 80}s linear infinite;
  position: relative;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    animation: ${scrollVertical} ${({ $speed }) => $speed || 80}s linear infinite;
  }
`;

export const FadedText = styled.span`
  color: ${theme.colors.black};
`;
