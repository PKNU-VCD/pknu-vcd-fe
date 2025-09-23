import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper, LogoContainer, LogoText, Wrapper } from '../common.styles';

export const DetailWrapper = styled(CommonWrapper)``;

export const DetailLogoContainer = styled(LogoContainer)``;

export const DetailLogoText = styled(LogoText)``;

export const DetailContainer = styled(Wrapper)``;

export const ExhibitionDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const ExhibitionDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ExhibitionDateText = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
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
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AddressText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

export const VehicleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;
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
  display: flex;
  flex-direction: row;
  padding: 100px;
  gap: 100px;
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
  gap: 10px;
  white-space: nowrap;

  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;
