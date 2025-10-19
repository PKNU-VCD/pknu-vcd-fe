import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const questionFadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface CanvasLayerProps {
  zIndex: number;
  isMovingUp?: boolean;
  removeTransform?: boolean;
  opacity?: number;
}

export const CanvasLayer = styled.div<CanvasLayerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: ${({ zIndex }) => zIndex};
  ${({ isMovingUp, removeTransform }) =>
    removeTransform
      ? 'transition: none; transform: translateY(0);'
      : `transition: transform 1s ease-out; transform: translateY(${isMovingUp ? '-70%' : '0'});`}
  ${({ opacity }) => opacity !== undefined && `opacity: ${opacity};`}
  ${({ opacity }) =>
    opacity !== undefined && 'transition: transform 1s ease-out, opacity 2s ease-out;'}
`;

export const Opening5Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
`;

export const MainContentWrapper = styled.div`
  opacity: 0;
  animation: ${fadeInKeyframes} 0.5s ease-out forwards;
  position: relative;
  z-index: 10;
`;

interface QuestionWordProps {
  x: number;
  y: number;
  isMovingUp: boolean;
  removeTransform: boolean;
}

export const QuestionWord = styled.div<QuestionWordProps>`
  position: fixed;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: ${({ removeTransform }) => (removeTransform ? 'none' : 'transform 1s ease-out')};
  transform: ${({ removeTransform, isMovingUp }) =>
    removeTransform ? 'translateY(0)' : isMovingUp ? 'translateY(-70vh)' : 'translateY(0)'};
  animation: ${questionFadeInKeyframes} 0.7s ease-out forwards;
  opacity: 0;
  z-index: 100;
  pointer-events: none;
`;

interface PinkDotProps {
  size: number;
}

export const PinkDot = styled.div<PinkDotProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: #ff74ff;
`;

export const QuestionText = styled.span`
  color: #ff74ff;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
`;
