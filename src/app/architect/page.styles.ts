import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper } from '../introduce/common.styles';

export const DesignerContainer = styled(CommonWrapper)`
  gap: 60px;
`;

export const LogoText = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UnionWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 14%;
  transform: translate(-50%, -50%);
`;

export const SearchContainer = styled.div`
  display: flex;
  padding: 10px 100px;
`;

export const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 100px;
`;

export const ThumbnailGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`;
