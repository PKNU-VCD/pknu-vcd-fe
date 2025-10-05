import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { LogoContainer, LogoText, Wrapper } from '../introduce/common.styles';

export const ExhibitionSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    text-align: center;
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnOne = styled(ColumnWrapper)`
  gap: 60px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    text-align: center;
  }
`;

export const ColumnTwo = styled(ColumnWrapper)`
  gap: 50px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    text-align: center;
  }
`;

export const ColumnThree = styled(ColumnWrapper)`
  gap: 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 30px;
    width: 100%;
  }
`;

export const ColumnFour = styled(ColumnWrapper)`
  gap: 30px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const ExhibitionWrapper = styled(Wrapper)`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 80px;
    margin-bottom: 80px;

    justify-content: center;

    text-align: center;
  }
`;

export const ExhibitionSubWrapper = styled(Wrapper)`
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 30px;
  }
`;

export const ExhibitionLogoContainer = styled(LogoContainer)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    text-align: center;
  }
`;

export const ExhibitionLogoText = styled(LogoText)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: center;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UnionWrapper = styled.div`
  position: absolute;
  top: 48%;
  left: 14%;
  transform: translate(-50%, -50%);

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    top: 42%;
  }
`;

export const EnglishText = styled.p`
  color: #666;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

export const ExhibitionImageWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 1120/516.92;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoTitle = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const VideoDescription = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  white-space: pre-line;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: left;
  }
`;

export const VideoWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 80px;
    margin-bottom: 80px;
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const VideoImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1120/630.33;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: none;
  }
`;

export const MobileBottomImageWrapper = styled.div`
  display: none;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    display: block;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-bottom: 60px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`;
