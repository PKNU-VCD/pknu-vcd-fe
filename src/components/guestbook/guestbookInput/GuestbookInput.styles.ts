import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-10px); }
  80% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`;

export const TextAreaContainer = styled.textarea<{ $isOverLimit: boolean }>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.input};
  ${({ theme }) => theme.typography.regular};
  border-radius: 20px;
  padding: 30px 30px 60px 30px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 8px;
  }

  ${({ $isOverLimit }) =>
    $isOverLimit &&
    css`
      animation: ${shake} 0.4s ease-in-out;
    `}
`;

export const TextLengthContainer = styled.div<{ $isOverLimit: boolean }>`
  //TODO: 컬러 시스템 정리 이후 수정 필요
  color: ${({ theme, $isOverLimit }) => ($isOverLimit ? '#FF33AA' : theme.colors.input)};
  ${({ theme, $isOverLimit }) =>
    $isOverLimit ? theme.typography.extraBold : theme.typography.regular};
  position: absolute;
  bottom: 12px;
  right: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 20px;
  }
`;

export const ButtonContainer = styled.button`
  border-radius: 1000px;
  border: 1px solid #f2f2f2;
  display: inline-flex;
  padding: 10px;
  align-self: flex-end;
`;
