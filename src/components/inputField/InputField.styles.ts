import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
}

export const Wrapper = styled.div<{ multiline?: boolean }>`
  display: flex;
  width: 100%;
  height: ${({ multiline }) => (multiline ? 'auto' : '40px')};
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${theme.colors.gray};
  background: #fff;
  position: relative;
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
    color: ${theme.colors.input};
  }
`;

export const TextAreaField = styled.textarea`
  border: none;
  outline: none;
  flex: 1;
  height: 300px;
  resize: none;

  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  color: var(--stroke-222-1, #222);

  &::placeholder {
    color: ${theme.colors.input};
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 8px;
`;
