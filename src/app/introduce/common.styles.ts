import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 120px 100px;
`;

export const CommonWrapper = styled(Wrapper)`
  flex-direction: column;
  background: linear-gradient(0deg, #fff 11.69%, rgba(255, 255, 255, 0) 88.49%);
  gap: 80px;
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
