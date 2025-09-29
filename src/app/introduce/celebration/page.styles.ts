import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText } from '../common.styles';

export const CelebrationWrapper = styled(CommonWrapper)`
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 80px;
    margin-bottom: 80px;

    align-items: center;
    flex-direction: column;
    gap: 70px;
  }
`;

export const CelebrationLogoContainer = styled(LogoContainer)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    gap: 40px;
  }
`;

export const CelebrationLogoText = styled(LogoText)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: center;
  }
`;

export const CelebrationInfoContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 80px;
    margin-bottom: 80px;
    flex-direction: column;
    gap: 60px;
  }
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
