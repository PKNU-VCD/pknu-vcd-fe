import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ProgressContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
`;

export const ProgressBar = styled.div<{
  backgroundColor?: string;
  borderColor?: string;
}>`
  width: 100%;
  height: 20px;
  border: 2px solid ${({ borderColor, theme }) => borderColor || theme.colors.pink};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.yellow};
  position: relative;
  border-radius: 10px;
  z-index: 2;
`;

export const FilledProgress = styled.div<{
  startPercent: number;
  endPercent: number;
  filledColor?: string;
  filledBorderColor?: string;
}>`
  position: absolute;
  top: 0;
  left: ${({ startPercent }) => startPercent}%;
  width: ${({ endPercent, startPercent }) => endPercent - startPercent}%;
  height: 100%;
  border: 2px solid ${({ filledBorderColor, theme }) => filledBorderColor || theme.colors.pink};
  background-color: ${({ filledColor, theme }) => filledColor || theme.colors.pink};
  border-radius: 10px;
  z-index: 1;
`;

export const VerticalLine = styled.div<{ position: number; color?: string }>`
  position: absolute;
  top: 50%;
  left: ${({ position }) => position}%;
  transform: translateY(-50%);
  width: 1px;
  height: 60px;
  border-left: 1px dashed ${({ color }) => color || '#333'};
  background-color: transparent;
`;

export const TimeLabel = styled.div<{ position: number; color?: string }>`
  position: absolute;
  top: 100%;
  left: ${({ position }) => position}%;
  transform: translateX(-50%);
  margin-top: 25px;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  color: ${({ color }) => color || theme.colors.stroke};
  white-space: nowrap;
`;
