import FootLogo from '@/assets/icons/FootLogo.svg';
import InstaIcon from '@/assets/icons/InstaIcon.svg';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg';

import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  width: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 60px 28px;
    gap: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 50px 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 50px 100px;
  }
`;

export const ExhibitionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 100px;
  }
`;

export const ExhibitionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  color: #666;
  font-size: ${({ theme }) => theme.typography.regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.regular.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.regular.letterSpacing};
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ExhibitionWrapper>
          <FootLogo />
          <ExhibitionText>
            <p>국립부경대학교 핵심역량도서관 1층 갤러리라운지 (부산광역시 남구 용소로45)</p>
            <p>2025.10.24.Fri, 2025.10.27.Mon. - 2025.10.28.Tue (10AM~8PM)</p>
            <p>pkvcd1234@gmail.com</p>
            <p>copyright 2025. PKVCD All Right Reserved</p>
          </ExhibitionText>
        </ExhibitionWrapper>
        <FooterSocialWrapper>
          <InstaIcon />
          <YoutubeIcon />
        </FooterSocialWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}
