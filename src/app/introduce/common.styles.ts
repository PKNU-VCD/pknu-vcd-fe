import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 120px;
  position: relative;
  z-index: 1;
  background: linear-gradient(0deg, #fff 0%, #fff 82%, rgba(255, 255, 255, 0) 100%);

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 80px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    padding: 0 28px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CommonWrapper = styled(Wrapper)`
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
`;

export const LogoText = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;
