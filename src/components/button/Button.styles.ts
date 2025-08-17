import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'exhibition'
  | 'confirm'
  | 'cancel';

export const variantStyles = {
  primary: css`
    padding: 12px 20px;
    gap: 10px;
    border: 2px solid var(--color-1-blue, #00aeef);
    background: #fff;
    color: var(--color-1-blue, #00aeef);

    &:active {
      border: 2px solid var(--color-2-pink, #ff74ff);
      background: var(--color-1-blue, #00aeef);
      color: #fff;
    }
  `,
  secondary: css`
    padding: 20px 8px;
    border: 3px solid var(--color-1-blue, #00aeef);
    background: #fff;
    color: var(--color-1-blue, #00aeef);

    &:active {
      border: 3px solid var(--color-2-pink, #ff74ff);
      background: var(--color-1-blue, #00aeef);
      color: #fff;
    }

    @media (max-width: 500px) {
      padding: 16px 20px;
      gap: 10px;
    }
  `,
  tertiary: css`
    padding: 6px 20px;
    gap: 10px;
    border: 2px solid var(--color-1-blue, #00aeef);
    background: #fff;
    color: var(--color-1-blue, #00aeef);

    &:active {
      border: 2px solid var(--color-2-pink, #ff74ff);
      background: var(--color-1-blue, #00aeef);
      color: #fff;
    }

    @media (max-width: 500px) {
      padding: 20px 20px;
      gap: 10px;
    }
  `,
  login: css`
    padding: 14px 100px;
    gap: 10px;
    background: var(--color-1-blue, #00aeef);
    border-radius: 0;
    color: #fff;
  `,
  exhibition: css`
    padding: 17px 16px;
    gap: 10px;
    border: 2px solid var(--color-2-pink, #ff74ff);
    background: var(--color-3-yellow, #ffff85);
    color: var(--color-0-black, #222);
    font-weight: ${theme.typography.medium.fontWeight};
  `,
  confirm: css`
    padding: 14px 40px;
    border: 3px solid var(--color-2-pink, #ff74ff);
    background: var(--color-1-blue, #00aeef);
    color: #fff;
  `,
  cancel: css`
    padding: 14px 40px;
    border: 3px solid var(--color-1-blue, #00aeef);
    background: #fff;
    color: var(--color-1-blue, #00aeef);
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
  font-size: ${theme.typography.bold.fontSize};
  font-weight: ${theme.typography.bold.fontWeight};
  line-height: ${theme.typography.bold.lineHeight};
  letter-spacing: ${theme.typography.bold.letterSpacing};

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
