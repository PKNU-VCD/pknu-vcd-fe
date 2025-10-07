import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const RecordContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 150px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex-direction: column-reverse;
    margin-top: 80px;
    margin-bottom: 80px;
    gap: 30px;
  }
`;

export const RecordLogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MainGuestbookContainer = styled.div`
  width: 600px;
  position: absolute;
  top: 40%;
  left: 27%;
  transform: translate(-50%, -50%);

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 410px;
    top: 10%;
    left: 27%;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: none;
  }
`;

export const MainGuestbookContainerMobile = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    border-bottom: 8.6px solid #00aeef;
  }
`;

export const UnionWrapper = styled.div`
  display: none;
  position: absolute;
  top: 30%;
  left: 14%;
  transform: translate(-50%, -50%);

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: block;
  }
`;

export const RecordTitle = styled.p`
  text-align: center;
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const RecordContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GuestbookInputContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;
