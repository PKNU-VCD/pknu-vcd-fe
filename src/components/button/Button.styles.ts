import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'login' | 'addFile' | 'upload';

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
    font-size: ${theme.typography.bold.fontSize};
    font-weight: ${theme.typography.bold.fontWeight};
    line-height: ${theme.typography.bold.lineHeight};
    letter-spacing: ${theme.typography.bold.letterSpacing};

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
    font-size: ${theme.typography.bold.fontSize};
    font-weight: ${theme.typography.bold.fontWeight};
    line-height: ${theme.typography.bold.lineHeight};
    letter-spacing: ${theme.typography.bold.letterSpacing};

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
