'use client';

import RecordLogoMobile from '@/assets/icons/sub/mobile/intro.svg';
import UnionDesign from '@/assets/icons/sub/mobile/Union_design.svg';
import UnionExhibit from '@/assets/icons/sub/mobile/Union_exhibit.svg';
import UnionIntro from '@/assets/icons/sub/mobile/Union_intro.svg';
import RecordLogoBlue from '@/assets/icons/sub/record/main_blue.svg';
import RecordLogoPink from '@/assets/icons/sub/record/main_pink.svg';
import RecordLogoTablet from '@/assets/icons/sub/record/tablet/main_icon.svg';
import FireworkBackground from '@/components/fireworkBackground/FireworkBackground';
import Footer from '@/components/footer/Footer';
import { GuestbookCard } from '@/components/guestbook/guestbookCard/GuestbookCard';
import { GuestbookGrid } from '@/components/guestbook/guestbookGrid/GuestbookGrid';
import { GuestbookInput } from '@/components/guestbook/guestbookInput/GuestbookInput';
import Header from '@/components/header/Header';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import { CommonContainer } from '../introduce/common.styles';
import * as S from './page.styles';

const mockComments = [
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
  '진짜 이제야 졸업하네 레전드',
];

const recordLogos = [RecordLogoPink, RecordLogoBlue];

const unionIcons = [UnionDesign, UnionExhibit, UnionIntro];
const RandomUnionIcon = unionIcons[Math.floor(Math.random() * unionIcons.length)];

export default function Record() {
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);

  const RandomRecordLogo = recordLogos[Math.floor(Math.random() * recordLogos.length)];

  return (
    <>
      <FireworkBackground color={theme.colors.lightGreen} />
      <Header headerType="main" />
      <CommonContainer>
        <S.RecordContainer>
          <S.RecordLogoWrapper>
            {isMobile ? (
              <RecordLogoMobile />
            ) : isTablet ? (
              <RecordLogoTablet />
            ) : (
              <RandomRecordLogo />
            )}
            <S.MainGuestbookContainer>
              <GuestbookCard text="진짜 이제야 졸업하네 레전드" />
            </S.MainGuestbookContainer>
            {isMobile && (
              <S.UnionWrapper>
                <RandomUnionIcon />
              </S.UnionWrapper>
            )}
          </S.RecordLogoWrapper>
          {isMobile ? (
            <S.RecordTitle>
              졸업을 축하하는 마음을
              <br /> ‘_합니다.’ 의 빈칸과 함께 채워주세요.
            </S.RecordTitle>
          ) : (
            <S.RecordTitle>
              졸업을 축하하는 마음을 ‘_합니다.’ 의 빈칸과 함께 채워주세요.
            </S.RecordTitle>
          )}
        </S.RecordContainer>
        {isMobile && (
          <>
            <S.MainGuestbookContainerMobile>
              <GuestbookCard text="진짜 이제야 졸업하네 레전드" />
            </S.MainGuestbookContainerMobile>
          </>
        )}
        <GuestbookGrid comments={mockComments} />
        <S.GuestbookInputContainer>
          <GuestbookInput onSubmit={() => {}} />
        </S.GuestbookInputContainer>
      </CommonContainer>
      <Footer footerType="sub" />
    </>
  );
}
