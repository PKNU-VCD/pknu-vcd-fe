import { theme } from '@/styles/theme';
import styled from '@emotion/styled';
import { CommonWrapper } from '../introduce/common.styles';

export const DesignerContainer = styled(CommonWrapper)`
  margin-top: 120px;
  margin-bottom: 120px;
  gap: 60px;

  // [ ]TODO: 이미지 잘림문제로 750px로 설정
  @media (max-width: 750px) {
    margin-top: 80px;
    margin-bottom: 70px;
    gap: 40px;
    align-items: center;
  }
`;

export const Title = styled.p`
  color: ${theme.colors.stroke};
  font-size: ${theme.typography.medium.fontSize};
  font-weight: ${theme.typography.medium.fontWeight};
  line-height: ${theme.typography.medium.lineHeight};
  letter-spacing: ${theme.typography.medium.letterSpacing};

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    text-align: center;
    white-space: nowrap;

    &::after {
      content: '';
      display: block;
    }
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
  top: 40%;
  left: 14%;
  transform: translate(-50%, -50%);

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    top: 41%;
  }
`;

export const SearchContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 30px;
    margin-bottom: 60px;
  }
`;

export const MenuListContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;

  @media (max-width: ${theme.breakpoints.mobileLarge}) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

export const ThumbnailGridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
