import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { LogoContainer, LogoText, Wrapper } from '../introduce/common.styles';

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ExhibitionWrapper = styled(Wrapper)``;

export const ExhibitionLogoContainer = styled(LogoContainer)``;

export const ExhibitionLogoText = styled(LogoText)``;

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
`;

export const EnglishText = styled.p`
  color: #666;
  font-size: ${theme.typography.regular.fontSize};
  font-weight: ${theme.typography.regular.fontWeight};
  line-height: ${theme.typography.regular.lineHeight};
  letter-spacing: ${theme.typography.regular.letterSpacing};
`;

// [ ]FIXME: 이미지 반응형으로 관리해야 함
export const ExhibitionImageWrapper = styled.div`
  background-color: #ccc;
  width: 850px;
  height: 600px;
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
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
  gap: 100px;
`;

export const VideoImageWrapper = styled.div`
  width: 100%;
  height: 700px;
`;
