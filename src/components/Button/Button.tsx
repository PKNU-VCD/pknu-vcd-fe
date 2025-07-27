import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'login';
  label?: string;
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const variantStyles = {
  primary: css`
  padding: 12px 20px;
  gap: 10px;
  border: 2px solid #F3A;
  background: #FFF;
  color: #F3A;

  &:active {
    border-color: #FFF;
    background: #F3A;
    color: #FFF;
  }
`,
  secondary: css`
    width: 245px;
    padding: 14px 0;
    gap: 10px;
    border-radius: 1000px;
    border: 1px solid #F3A;
    background: #FFF;
    color: #F3A;
    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};

    &:active {
      border: 1px solid #FFE8F9;
      background: #F3A;
      color: #FFF;
    }
  `,
  tertiary: css`
    padding: 12px 20px;
    gap: 10px;
    border: 2px solid #F3A;
    background: #FFF;
    color: #F3A;

    &:active {
      border-color: #FFADEB;
      background: #F3A;
      color: #FFF;
    }
  `,
  login: css`
    width: 464px;
    height: 48px;
    padding: 14px 100px;
    gap: 10px;
    background: #34CD8C;
    border-radius: 0;
    color: #FFF;
  `,
};

const BaseButton = styled.button<ButtonProps>`
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
  variant = 'tertiary',
  ...props
}: ButtonProps) {
  return (
    <BaseButton variant={variant} {...props}>
      {children ?? label}
    </BaseButton>
  );
}

