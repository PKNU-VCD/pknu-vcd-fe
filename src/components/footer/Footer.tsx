import FootLogo from '@/assets/icons/FootLogo.svg';
import InstaIcon from '@/assets/icons/InstaIcon.svg';
import YoutubeIcon from '@/assets/icons/YoutubeIcon.svg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import * as S from './Footer.styles';

interface FooterProps {
  footerType?: 'main' | 'sub';
  backgroundColor?: 'default' | 'white';
}

const InstagramUrl = 'https://www.instagram.com/pknu_vcd/';

export default function Footer({ footerType = 'main', backgroundColor = 'default' }: FooterProps) {
  const isMobile = useMediaQuery(theme.breakpoints.mobileLarge);

  return (
    <S.Wrapper backgroundColor={backgroundColor}>
      <S.FooterContainer>
        <S.FooterMainSection>
          <FootLogo />
          <S.FooterText footerType={footerType}>
            <p>국립부경대학교 핵심역량도서관 1층 갤러리라운지 (부산광역시 남구 용소로45)</p>
            <p>2025.10.24.Fri, 2025.10.27.Mon. - 2025.10.28.Tue (10AM~8PM)</p>
            <p>pkvcd1234@gmail.com</p>
            <p>copyright 2025. PKVCD All Right Reserved</p>
          </S.FooterText>
        </S.FooterMainSection>
        <S.FooterSocialLinks>
          <a href={InstagramUrl} target="_blank" rel="noopener noreferrer" aria-label="instagram">
            <InstaIcon />
          </a>
          <a
            href="https://www.youtube.com/watch?v=_W-uMEfTfqo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="youtube"
          >
            <YoutubeIcon />
          </a>
        </S.FooterSocialLinks>
      </S.FooterContainer>
    </S.Wrapper>
  );
}
