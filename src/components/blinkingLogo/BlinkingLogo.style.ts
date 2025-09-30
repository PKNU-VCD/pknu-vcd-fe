import HeaderIcon from '@/assets/icons/HeaderIcon.svg';
import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  position: relative;
`;

export const Logo = styled(HeaderIcon)`
  width: 625px;
  height: auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 621px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    width: 310px;
  }
`;

export const BlinkSection = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 1px;
  width: 20%;
  height: 99%;
  border: 3px dashed ${({ theme }) => theme.colors.blue};
  pointer-events: none;
  transition: opacity 120ms ease;
  color: ${({ theme }) => theme.colors.pink};
  text-align: center;
  ${({ theme }) => theme.typography.bold}
  white-space: pre-line;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ theme }) => theme.typography.bold}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    ${({ theme }) => theme.typography.regular}
  }
`;
