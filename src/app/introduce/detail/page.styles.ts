import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText, Wrapper } from '../common.styles';

export const DetailWrapper = styled(CommonWrapper)`
  margin-top: 120px;
  margin-bottom: 120px;
  gap: 80px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
    gap: 70px;
  }
`;

export const DetailLogoContainer = styled(LogoContainer)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    gap: 40px;
  }
`;

export const DetailLogoText = styled(LogoText)`
  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: center;
  }
`;

export const DetailContainer = styled(Wrapper)`
  margin-top: 120px;
  margin-bottom: 120px;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 60px;
  }
`;

export const ExhibitionDateContainer = styled(Wrapper)`
  margin-top: 120px;
  margin-bottom: 120px;
  gap: 50px;
  flex-direction: column;

  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};
  }
`;

export const ExhibitionDateContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ExhibitionDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContentTitle = styled.p`
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;
export const ExhibitionDateProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ExhibitionDateProgressText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ExhibitionDateProgressTextLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;
`;

export const ExhibitionDateText = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};
  }
`;

export const SubIntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    gap: 50px;
  }
`;

export const AddressText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    flex-direction: column;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 85vw;
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }
`;

export const VehicleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    width: 100%;
    gap: 30px;

    button {
      width: 90vw;
    }
  }
`;

export const Vehicle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  color: ${theme.colors.stroke};
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
  white-space: nowrap;
`;

export const InfoContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: row;
  gap: 50px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: 80px;
    margin-bottom: 80px;

    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 60px;
    margin-bottom: 60px;
    gap: 50px;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  white-space: nowrap;

  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    white-space: pre-line;
    align-items: flex-start;
    font-size: ${theme.typography.regular.fontSize};
    font-weight: ${theme.typography.regular.fontWeight};
    line-height: ${theme.typography.regular.lineHeight};
    letter-spacing: ${theme.typography.regular.letterSpacing};

    button {
      padding: 22px 50px;
      width: 90vw;
    }
  }
`;
