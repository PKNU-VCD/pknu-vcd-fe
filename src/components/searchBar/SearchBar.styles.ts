import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 10px;
  }
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.input`
  flex: 1;
  border: none;
  padding: 20px 0px;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};

  &:focus {
    outline: none;
  }
`;
