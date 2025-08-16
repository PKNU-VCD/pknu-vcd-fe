import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'login' | 'addFile' | 'upload';

export const variantStyles = {
  primary: css`
    padding: 12px 20px;
    gap: 10px;
    border: 2px solid #f3a;
    background: #fff;
    color: #f3a;

    &:active {
      border-color: #fff;
      background: #f3a;
      color: #fff;
    }
  `,
  secondary: css`
    padding: 14px 20px;
    border: 1px solid #f3a;
    background: #fff;
    color: #f3a;
    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};

    &:active {
      border: 1px solid #ffe8f9;
      background: #f3a;
      color: #fff;
    }

    @media (max-width: 500px) {
      padding: 16px 20px;
      gap: 10px;
      border: 2px solid #f3a;

      font-size: ${theme.typography.medium.fontSize};
      font-weight: ${theme.typography.medium.fontWeight};
      line-height: ${theme.typography.medium.lineHeight};
      letter-spacing: ${theme.typography.medium.letterSpacing};

      &:active {
        border: 2px solid #ffadeb;
        background: #f3a;
        color: #fff;
      }
    }
  `,
  tertiary: css`
    padding: 12px 20px;
    gap: 10px;
    border: 2px solid #f3a;
    background: #fff;
    color: #f3a;

    &:active {
      border-color: #ffadeb;
      background: #f3a;
      color: #fff;
    }

    @media (max-width: 500px) {
      padding: 16px 20px;
      gap: 10px;
      align-self: stretch;
    }
  `,
  login: css`
    padding: 14px 100px;
    gap: 10px;
    background: var(--color-5-blue, #34cd8c);
    border-radius: 0;
    color: #fff;

    @media (max-width: 500px) {
      // 상수로 변경예정
      width: 100%;
    }
  `,
  addFile: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 10px 14px;
    gap: 20px;
    border: 1px solid var(--stroke-222-1, #222);
    background: #ffadeb;

    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};

    @media (max-width: 500px) {
      width: 100%;
      padding: 10px 20px;
      gap: 10px;
      justify-content: flex-start;
    }
  `,
  upload: css`
    display: flex;
    width: 80px;
    height: 40px;
    padding: 10px 14px;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--stroke-222-1, #222);
    background: #f4f4a7;

    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};

    @media (max-width: 500px) {
      width: 100%;
      height: 44px;
    }
  `,
} as const;

export type StyledButtonProps = {
  variant?: ButtonVariant;
  $fullWidth?: boolean;
  headerType?: 'main' | 'sub';
};

export const BaseButton = styled('button', {
  shouldForwardProp: prop => !['variant', '$fullWidth'].includes(String(prop)),
})<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 625rem;
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};

  ${({ variant }) => variant && variantStyles[variant]}

  ${({ variant, headerType }) =>
    variant === 'primary' &&
    headerType === 'main' &&
    css`
      background: #fff;
    `}

  ${({ variant, headerType }) =>
    variant === 'primary' &&
    headerType === 'sub' &&
    css`
      background: #f2f2f2;
    `}

  ${({ $fullWidth }) => $fullWidth && `width: 100%;`}
`;
