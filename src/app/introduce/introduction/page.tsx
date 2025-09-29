'use client';

import { CommonContainer } from '@/app/introduce/common.styles';
import ExhibitAside from '@/assets/icons/sub/exhibit_aside.svg';
import IntroLogo from '@/assets/icons/sub/intro.svg';
import IntroImage from '@/assets/icons/sub/introduce.svg';
import IntroLogoMobile from '@/assets/icons/sub/mobile/intro.svg';
import IntroImageMobile from '@/assets/icons/sub/mobile/introduce.svg';
import ExhibitUnionMobile from '@/assets/icons/sub/mobile/Union_intro.svg';
import IntroImageTablet from '@/assets/icons/sub/tablet/introduce.svg';
import ExhibitUnion from '@/assets/icons/sub/Union.svg';
import ButtonList from '@/components/buttonList/introduce/ButtonList';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import * as S from './page.styles';

const FadedTextColors = [
  '#222',
  'rgba(34, 34, 34, 0.70)',
  'rgba(34, 34, 34, 0.50)',
  'rgba(34, 34, 34, 0.20)',
  'rgba(34, 34, 34, 0.10)',
];

export default function Introduce() {
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);

  return (
    <>
      <Header headerType="main" />
      <CommonContainer>
        <S.IntroductionWrapper>
          <S.IntroductionLogoContainer>
            <S.IntroductionLogoText>
              제 37회 2025 국립부경대학교
              {isMobile && <br />}
              시각디자인전공 졸업전시회
            </S.IntroductionLogoText>
            <S.LogoWrapper>
              {isMobile ? <IntroLogoMobile /> : <IntroLogo />}
              <S.UnionWrapper>
                {isMobile ? <ExhibitUnionMobile /> : <ExhibitUnion />}
              </S.UnionWrapper>
            </S.LogoWrapper>

            <ButtonList />
          </S.IntroductionLogoContainer>
        </S.IntroductionWrapper>
        <S.IntroductionContainer>
          <S.AsideContainer>
            <ExhibitAside />
            {isMobile && (
              <S.MobileAsideContainer>
                <S.IntroductionLogoText>
                  제 37회 2025 국립부경대학교 <br /> 시각디자인전공 졸업전시회 소개영상
                </S.IntroductionLogoText>
                <S.IntroductionLogoText style={{ color: '#666666' }}>
                  The 37th PKNU <br /> Visual CommunicationDesign Major <br />
                  Graduation Exhibition Intro Video
                </S.IntroductionLogoText>
              </S.MobileAsideContainer>
            )}
            {!isMobile && (
              <S.IntroductionLogoText>
                제 37회 2025 국립부경대학교 <br /> 시각디자인전공 졸업전시회 소개
              </S.IntroductionLogoText>
            )}
          </S.AsideContainer>

          <S.IntroductionSubContainer>
            <S.IntroImageContainer>
              {isTablet ? <IntroImageTablet /> : isMobile ? <IntroImageMobile /> : <IntroImage />}
            </S.IntroImageContainer>
            <S.ContentContainer>
              {isMobile && (
                <S.ContentTitle>
                  The 37th PKNU Visual
                  <br /> Communication Design Major
                  <br />
                  Graduation Exhibition
                </S.ContentTitle>
              )}
              {!isMobile && (
                <S.ContentTitle>
                  The 37th PKNU Visual Communication Design Major Graduation Exhibition
                </S.ContentTitle>
              )}

              <S.ContentDescription>
                “_합니다.”는 아직 완성되지 않은 문장입니다.
                <br />
                그 빈칸에는 ‘졸업합니다’, ‘도전합니다’, ‘디자인합니다’처럼 우리 각자의 시작과
                방향성이 자유롭게 들어갈 수 있습니다.
                <br />
                우리는 디자이너로서, 지금도 그 문장을 써 내려가고 있는 중입니다.
                <br />
                이번 전시는 우리의 가능성과 꿈이 시각적으로 응축된 순간을 담고자 기획되었습니다.
                <br />
                <br />
                포스터 중앙에서 사방으로 뻗어나가는 형형색색의 궤적은 디자인을 배우며 축적해온
                시간과 고민, <br />
                그리고 앞으로의 잠재력이 하나의 에너지로 폭발하는 장면을 상징합니다. <br />
                불규칙하고 다채로운 선들은 각기 다른 우리가 가진 고유한 여정과 개성을 드러내며,
                동시에 무한히 확장될 가능성의 방향을 제시합니다.
                <br />
                <br />이 전시는 진행형의 가능성들이 시각적으로 피어나는 장면이며, 각자의 위치에서
                출발한 색과 선들이 모여 하나의 강렬한 시각적 폭발을 만들어냅니다.
              </S.ContentDescription>
              <TranslationPanel text={'\"_합니다.\" is an unfinished sentence\n'} />
            </S.ContentContainer>
          </S.IntroductionSubContainer>
        </S.IntroductionContainer>
        <S.ParticipantsContainer>
          <S.TextContainer>
            <S.KoreanText>
              제 37회 2025 국립부경대학교
              <br /> 시각디자인전공 졸업전시회 참여자
            </S.KoreanText>
            <S.EnglishText>
              Participants of the 37th PKNU
              <br /> Visual Communication Design Major
              <br /> Graduation Exhibition
            </S.EnglishText>
          </S.TextContainer>
          <S.ParticipantsList>
            <S.ParticipantItem>
              <S.ParticipantType>지도교수 Professors</S.ParticipantType>
              <S.ParticipantContent>홍동식 Hong dong sik</S.ParticipantContent>
            </S.ParticipantItem>
            <S.ParticipantItem>
              <S.ParticipantType>디자이너 Designer</S.ParticipantType>
              <S.FadedTextContainer>
                {FadedTextColors.map((color, index) => (
                  <S.FadedText key={index} color={color}>
                    홍동식 Hong dong sik
                  </S.FadedText>
                ))}
              </S.FadedTextContainer>
            </S.ParticipantItem>
            <S.ParticipantItem>
              <S.ParticipantType>졸업준비위원회 Graduation Committee</S.ParticipantType>
              {isMobile && (
                <S.FadedTextContainer>
                  {FadedTextColors.map((color, index) => (
                    <S.FadedText key={index} color={color}>
                      홍동식 Hong dong sik
                    </S.FadedText>
                  ))}
                </S.FadedTextContainer>
              )}
              {!isMobile && <S.ParticipantContent>홍동식 Hong dong sik</S.ParticipantContent>}
            </S.ParticipantItem>
          </S.ParticipantsList>
        </S.ParticipantsContainer>
      </CommonContainer>
      <Footer footerType="sub" />
    </>
  );
}
