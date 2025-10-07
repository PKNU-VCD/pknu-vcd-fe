import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText, Wrapper } from '../common.styles';

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
  margin-bottom: 120px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 60px;
  }
`;

export const ParticipantItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${theme.colors.stroke};

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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  white-space: nowrap;

  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    white-space: normal;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
  }
`;

export const FadedText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
