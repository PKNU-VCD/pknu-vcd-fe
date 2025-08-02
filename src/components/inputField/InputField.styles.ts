import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
}

export const InputWrapper = styled.div`
  display: flex;
  width: 464px;
  height: 40px;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid #f2f2f2;
  background: #fff;
`;

export const InputField = styled.input<InputFieldProps>`
  border: none;
  outline: none;
  flex: 1;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  color: var(--stroke-222-1, #222);

  &::placeholder {
    color: #a4a4a4;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
`;
