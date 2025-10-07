import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    padding-left: 38px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${theme.colors.black};

    path {
      fill: ${theme.colors.black};
    }
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const AdminButton = styled.button`
  color: ${theme.colors.white};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
  cursor: pointer;
  background: none;
  border: none;
`;
