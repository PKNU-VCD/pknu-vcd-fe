import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ToggleContainer = styled.button<{ $buttonColor: keyof Theme['colors'] }>`
  width: fit-content;
  ${({ theme }) => theme.typography.regular}
  display: flex;
  gap: 30px;
  align-items: center;
  background-color: ${({ theme, $buttonColor }) => theme.colors[$buttonColor]};
  padding: 8px 16px;
  border-radius: 1000px;
`;

export const TextContainer = styled.p`
  white-space: pre-line;
`;
