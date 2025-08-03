import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonProps } from './Button';

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
    width: 245px;
    padding: 14px 0;
    gap: 10px;
    border-radius: 1000px;
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
  `,
  login: css`
    width: 464px;
    height: 48px;
    padding: 14px 100px;
    gap: 10px;
    background: #34cd8c;
    border-radius: 0;
    color: #fff;
  `,
};

export const BaseButton = styled.button<ButtonProps>`
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

  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === 'number' ? `${height}px` : height};
    `}
  ${({ fullWidth }) => fullWidth && `width: 100%;`}
`;
