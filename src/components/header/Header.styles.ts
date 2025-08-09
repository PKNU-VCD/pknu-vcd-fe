import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  background: linear-gradient(180deg, #fff 8.16%, rgba(255, 255, 255, 0) 96.68%);
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  @media (max-width: 1200px) {
    padding: 0 80px;
  }

  @media (max-width: 500px) {
    padding: 0 28px;
  }
`;

export const HeaderLogo = styled.button`
  display: flex;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HeaderAdminTab = styled.text`
  color: #ececec;
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
  cursor: pointer;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const HeaderUnion = styled.button`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;
