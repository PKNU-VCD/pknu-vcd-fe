import { theme } from '@/styles/theme';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText } from '../common.styles';

const fadeIn = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;

export const CelebrationWrapper = styled(CommonWrapper)`
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 80px;
    margin-bottom: 80px;

    align-items: center;
    flex-direction: column;
    gap: 70px;
  }
`;

export const CelebrationLogoContainer = styled(LogoContainer)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    gap: 40px;
  }
`;

export const CelebrationLogoText = styled(LogoText)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: center;
  }
`;

export const CelebrationInfoContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  gap: 100px;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 80px;
    flex-direction: column;
    gap: 60px;
  }
`;

export const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${theme.colors.stroke};
`;

export const ProfessorTitle = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

export const Professor = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
  white-space: nowrap;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  color: ${theme.colors.stroke};
`;

export const ContentTitle = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const Content = styled.p`
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  white-space: pre-line;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
  margin-bottom: 80px;
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? theme.colors.stroke : theme.colors.lightGray)};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darkGray};
  }
`;
