// Button.tsx
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'exhibition' | 'login' | 'header';
  label?: string;
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const variantStyles = {
  exhibition: css`
    height: 2.3125rem;
    padding: 0.375rem 1.25rem;
    gap: 0.625rem;
    border: 2px solid #F3A;
    background: #FFF;
    color: #F3A;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.025rem;

    &:active {
      border-color: #FFADEB;
      background: #F3A;
      color: #FFF;
    }
  `,
  login: css`
    width: 29rem;
    height: 3rem;
    padding: 0.875rem 6.25rem;
    gap: 0.625rem;
    background: #34CD8C;
    border-radius: 0;
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.025rem;
  `,
  header: css`
    padding: 0.75rem 1.25rem;
    gap: 0.625rem;
    border: 2px solid #F3A;
    background: #FFF;
    color: #F3A;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.025rem;

    &:active {
      border-color: #FFF;
      background: #F3A;
      color: #FFF;
    }
  `,
};

const BaseButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: SUITE;
  font-style: normal;
  line-height: 130%;
  border-radius: 625rem;
  border: none;

  ${({ variant }) => variant && variantStyles[variant]}
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

export function Button({
  label,
  children,
  variant = 'exhibition',
  ...props
}: ButtonProps) {
  return (
    <BaseButton variant={variant} {...props}>
      {children ?? label}
    </BaseButton>
  );
}

