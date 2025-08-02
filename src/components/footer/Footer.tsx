import FootLogo from '@/assets/icons/FootLogo.svg';
import InstaIcon from '@/assets/icons/InstaIcon.svg';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg';
import * as S from './Footer.styles';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.ExhibitionWrapper>
          <FootLogo />
          <S.ExhibitionText>
            <p>국립부경대학교 핵심역량도서관 1층 갤러리라운지 (부산광역시 남구 용소로45)</p>
            <p>2025.10.24.Fri, 2025.10.27.Mon. - 2025.10.28.Tue (10AM~8PM)</p>
            <p>pkvcd1234@gmail.com</p>
            <p>copyright 2025. PKVCD All Right Reserved</p>
          </S.ExhibitionText>
        </S.ExhibitionWrapper>
        <S.FooterSocialWrapper>
          <InstaIcon />
          <YoutubeIcon />
        </S.FooterSocialWrapper>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}
