import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText, Wrapper } from '../common.styles';

export const IntroductionWrapper = styled(CommonWrapper)``;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IntroductionLogoContainer = styled(LogoContainer)``;

export const IntroductionLogoText = styled(LogoText)``;

export const UnionWrapper = styled.div`
  position: absolute;
  top: 48%;
  left: 14%;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28px;
`;

export const IntroductionContainer = styled(Wrapper)`
  gap: 50px; // [ ] TODO: 실제 100px인데 겹치는 문제로 50px로 줄임
`;

export const IntroductionSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  img,
  svg {
    width: 100%;
    height: auto;
    max-height: 600px;
    object-fit: contain;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${theme.colors.stroke};
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

export const IconPlaceholder = styled.div`
  width: 100%;
  height: 600px;
  background-color: #f0f0f0;
`;

export const ParticipantsContainer = styled(Wrapper)`
  flex-direction: row;
  gap: 100px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const KoreanText = styled.p`
  white-space: nowrap;
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const EnglishText = styled.p`
  color: #666666;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const ParticipantItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: ${theme.colors.stroke};
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
`;

export const FadedText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
