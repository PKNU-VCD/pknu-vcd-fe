import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText } from '../common.styles';

export const CelebrationWrapper = styled(CommonWrapper)``;

export const CelebrationLogoContainer = styled(LogoContainer)``;

export const CelebrationLogoText = styled(LogoText)``;

export const CelebrationInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px;
  gap: 100px;
`;

export const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${theme.colors.stroke};
`;

export const ProfessorTitle = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

export const Professor = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
  white-space: nowrap;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: ${theme.colors.stroke};
`;

export const ContentTitle = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const Content = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;
