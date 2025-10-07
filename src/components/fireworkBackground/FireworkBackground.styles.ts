import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const FireworkContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: none;
  }
`;
