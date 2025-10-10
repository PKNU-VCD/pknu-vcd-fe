'use client';

import { CommonContainer } from '@/app/introduce/common.styles';
import ExhibitAside from '@/assets/icons/sub/exhibit_aside.svg';
import IntroImageMobile from '@/assets/icons/sub/exhibition_icon.png';
import IntroLogo from '@/assets/icons/sub/intro.svg';
import IntroImage from '@/assets/icons/sub/introduce.png';
import IntroLogoMobile from '@/assets/icons/sub/mobile/intro.svg';
import ExhibitUnionMobile from '@/assets/icons/sub/mobile/Union_intro.svg';
import IntroImageTablet from '@/assets/icons/sub/tablet/introduce.png';
import ExhibitUnion from '@/assets/icons/sub/Union.svg';
import ButtonList from '@/components/buttonList/introduce/IntroduceButton';
import FireworkBackground from '@/components/fireworkBackground/FireworkBackground';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import * as S from './page.styles';

const INTRODUCTION_ENGLISH_TEXT = `The phrase “_합니다.” remains an unfinished sentence. In the blank, words like “graduate,” “challenge,” or “design” can freely take shape—each representing our own beginning and direction. As designers, we are still in the process of writing that sentence.\n
This exhibition is conceived to capture a moment in which our potential and dreams are visually condensed. At the center of the poster, multicolored trajectories radiating outward symbolize the accumulation of time, thought, and creative energy built through our design journey—an explosion of possibilities yet to come. The irregular and diverse lines reveal our unique paths and identities, while at the same time pointing toward the limitless directions of our expanding potential.\n
This exhibition presents an unfolding scene of possibilities in motion—where colors and lines, each starting from an individual origin, converge into one powerful visual eruption.`;

const INTRODUCTION_KOREAN_TEXT = `“_합니다.”는 아직 완성되지 않은 문장입니다.
그 빈칸에는 ‘졸업합니다’, ‘도전합니다’, ‘디자인합니다’처럼 우리 각자의 시작과 방향성이 자유롭게 들어갈 수 있습니다. 우리는 디자이너로서, 지금도 그 문장을 써 내려가고 있는 중입니다.
이번 전시는 우리의 가능성과 꿈이 시각적으로 응축된 순간을 담고자 기획되었습니다.\n
포스터 중앙에서 사방으로 뻗어나가는 형형색색의 궤적은 디자인을 배우며 축적해온 시간과 고민, 그리고 앞으로의 잠재력이 하나의 에너지로 폭발하는 장면을 상징합니다. 불규칙하고 다채로운 선들은 각기 다른 우리가 가진 고유한 여정과 개성을 드러내며, 동시에 무한히 확장될 가능성의 방향을 제시합니다. \n
이 전시는 진행형의 가능성들이 시각적으로 피어나는 장면이며, 각자의 위치에서 출발한 색과 선들이 모여 하나의 강렬한 시각적 폭발을 만들어냅니다.`;
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
      <FireworkBackground color={theme.colors.yellow} />
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
                <S.IntroductionLogoText style={{ color: theme.colors.darkGray }}>
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
              {isMobile ? (
                <Image src={IntroImageMobile} alt="intro" />
              ) : isTablet ? (
                <Image src={IntroImageTablet} alt="intro" />
              ) : (
                <Image src={IntroImage} alt="intro" />
              )}
            </S.IntroImageContainer>
            <S.ContentContainer>
              {isMobile ? (
                <S.ContentTitle>
                  The 37th PKNU Visual
                  <br /> Communication Design Major
                  <br />
                  Graduation Exhibition
                </S.ContentTitle>
              ) : (
                <S.ContentTitle>
                  The 37th PKNU Visual Communication Design Major Graduation Exhibition
                </S.ContentTitle>
              )}
              <S.ContentDescription>{INTRODUCTION_KOREAN_TEXT}</S.ContentDescription>
              <TranslationPanel text={INTRODUCTION_ENGLISH_TEXT} />
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
      <Footer footerType="sub" backgroundColor="white" />
    </>
  );
}
