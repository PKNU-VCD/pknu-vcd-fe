'use client';

import { CommonContainer } from '@/app/introduce/common.styles';
import ExhibitionAside from '@/assets/icons/sub/exhibit_aside.svg';
import ExhibitionIcon from '@/assets/icons/sub/exhibition_icon.png';
import ExhibitionLogo from '@/assets/icons/sub/intro.svg';
import ExhibitionLogoMobile from '@/assets/icons/sub/mobile/intro.svg';
import ExhibitUnionMobile from '@/assets/icons/sub/mobile/Union_exhibit.svg';
import ExhibitUnion from '@/assets/icons/sub/Union_exhibit.svg';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import * as S from './page.styles';

const FireworkBackground = dynamic(
  () => import('@/components/fireworkBackground/FireworkBackground'),
  { ssr: false },
);

const VideoData = {
  title: 'Video Title',
  description:
    '졸업전시회 소개 영상은 “_합니다.”라는 미완의 문장이 완성되어가는 과정을 시각적으로 담아냅니다.\n기획의 시작부터 설치의 순간까지, 각자의 손끝에서 흩어지고 이어지는 색과 선의 움직임은 디자이너로서 우리가 걸어온 여정과 앞으로 나아갈 방향을 상징합니다.\n\n영상 속 장면들은 단순한 제작 기록이 아니라, 가능성이 형태를 얻고 생각이 현실로 피어나는 ‘과정의 미학’을 보여줍니다.\n서로 다른 시선과 손길이 모여 하나의 전시로 완성되는 그 시간 속에서, 우리는 여전히 각자의 방법으로 빈칸을 채워가는 중입니다.\n\n메이킹 영상은 완성된 결과 너머, 디자인이라는 문장을 써 내려가는 우리 모두의 ‘현재진행형 이야기’를 담고 있습니다.',
  englishDescription:
    'The graduation exhibition film visually captures the process of completing the unfinished sentence, “_합니다.”\nFrom the very first concept to the final installation, the flowing and intertwining colors and lines represent our journey as designers and the directions we continue to pursue.\n\nThe scenes within the film are more than a record of production — they reveal the aesthetics of process, where possibilities take form and ideas blossom into reality.\nAs diverse perspectives and hands come together to create a single exhibition, we each continue to fill in our own blanks in different ways.\n\nThis making film goes beyond the finished result, portraying our ongoing story — the act of writing the sentence of design itself.',
  subTitle: '전시 메이킹 영상',
  subDescription:
    '이번 졸업전시회의 메이킹 영상은 우리가 전시 주제를 찾아가는 과정, 그리고 고민 속에 그 주제를 하나의 결과물로 완성해가는 과정을 담았습니다. 여러 고민들을 걷어내 찾은 아이디어들을 한 단계씩 구체화하며 끊임없이 고민하고, 시행착오 속에서도 방향을 찾아가는 우리의 열정이 녹아 있습니다. 학생들과 교수님들이 함께 전시에 대해 이야기하고, 최선의 결과물을 위해 “-합니다.”의 빈칸에 무엇을 채울 것인지 논의하는 생생한 순간들이 펼쳐집니다. 이 메이킹 영상을 통해 전시의 결과보다 ‘과정’ 그 자체에 담긴 의미를 확인해 보세요.',
};

export default function Exhibition() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);

  return (
    <>
      <FireworkBackground color={'#F9D2EF'} />
      <Header headerType="main" />
      <CommonContainer>
        <S.ExhibitionWrapper>
          <S.ExhibitionLogoContainer>
            <S.ExhibitionLogoText>당신은 어떤 가능성을 꿈꾸고 있나요?</S.ExhibitionLogoText>
            <S.LogoWrapper>
              {isMobile ? <ExhibitionLogoMobile /> : <ExhibitionLogo />}
              <S.UnionWrapper>
                {isMobile ? <ExhibitUnionMobile /> : <ExhibitUnion />}
              </S.UnionWrapper>
            </S.LogoWrapper>
          </S.ExhibitionLogoContainer>
        </S.ExhibitionWrapper>
        <S.ExhibitionSubWrapper>
          <S.ExhibitionSubContainer>
            <S.ColumnOne>
              {!isMobile && <ExhibitionAside />}
              <S.ColumnTwo>
                <S.ExhibitionLogoText>
                  제 37회 2025 국립부경대학교 <br />
                  시각디자인전공 졸업전시회 소개 영상
                </S.ExhibitionLogoText>
                <S.EnglishText>
                  The 37th PKNU <br /> Visual CommunicationDesign Major <br />
                  Graduation Exhibition Intro Video
                </S.EnglishText>
              </S.ColumnTwo>
            </S.ColumnOne>
            <S.ColumnThree>
              <S.ExhibitionImageWrapper>
                <Image src={ExhibitionIcon} alt="exhibition" />
              </S.ExhibitionImageWrapper>
              <S.ColumnFour>
                <S.VideoTitle>{VideoData.title}</S.VideoTitle>
                <S.VideoDescription>{VideoData.description}</S.VideoDescription>
                <TranslationPanel text={VideoData.englishDescription} />
              </S.ColumnFour>
            </S.ColumnThree>
          </S.ExhibitionSubContainer>
        </S.ExhibitionSubWrapper>
        <S.VideoWrapper>
          <S.ColumnWrapper style={{ gap: '50px' }}>
            <S.VideoTitle>{VideoData.subTitle}</S.VideoTitle>
            <S.VideoDescription>{VideoData.subDescription}</S.VideoDescription>
            <S.VideoImageWrapper>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_W-uMEfTfqo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </S.VideoImageWrapper>
          </S.ColumnWrapper>
        </S.VideoWrapper>
      </CommonContainer>
      <Footer footerType="sub" backgroundColor="white" />
    </>
  );
}
