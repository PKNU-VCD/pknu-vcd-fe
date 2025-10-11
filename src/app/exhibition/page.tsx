'use client';

import { CommonContainer } from '@/app/introduce/common.styles';
import ExhibitionAside from '@/assets/icons/sub/exhibit_aside.svg';
import ExhibitionIcon from '@/assets/icons/sub/exhibition_icon.png';
import ExhibitionLogo from '@/assets/icons/sub/intro.svg';
import ExhibitionLogoMobile from '@/assets/icons/sub/mobile/intro.svg';
import ExhibitUnionMobile from '@/assets/icons/sub/mobile/Union_exhibit.svg';
import ExhibitUnion from '@/assets/icons/sub/Union_exhibit.svg';
import Footer from '@/components/footer/Footer';
import dynamic from 'next/dynamic';

const FireworkBackground = dynamic(
  () => import('@/components/fireworkBackground/FireworkBackground'),
  { ssr: false },
);
import Header from '@/components/header/Header';
import { TranslationPanel } from '@/components/translationPanel/TranslationPanel';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import * as S from './page.styles';

const VideoData = {
  title: 'Video Title',
  description:
    '“_합니다.”는 아직 완성되지 않은 문장입니다.\n그 빈칸에는 ‘졸업합니다’, ‘도전합니다’, ‘디자인합니다’처럼 우리 각자의 시작과 방향성이 자유롭게 들어갈 수 있습니다.\n우리는 디자이너로서, 지금도 그 문장을 써 내려가고 있는 중입니다.\n이번 전시는 우리의 가능성과 꿈이 시각적으로 응축된 순간을 담고자 기획되었습니다.\n\n 포스터 중앙에서 사방으로 뻗어나가는 형형색색의 궤적은 디자인을 배우며 축적해온 시간과 고민,\n그리고 앞으로의 잠재력이 하나의 에너지로 폭발하는 장면을 상징합니다.\n불규칙하고 다채로운 선들은 각기 다른 우리가 가진 고유한 여정과 개성을 드러내며, 동시에 무한히 확장될 가능성의 방향을 제시합니다.\n\n 이 전시는 진행형의 가능성들이 시각적으로 피어나는 장면이며, 각자의 위치에서 출발한 색과 선들이 모여 하나의 강렬한 시각적 폭발을 만들어냅니다.',
  englishDescription:
    '"_합니다." is an unfinished sentence.\nIt holds space for words like "graduate," "challenge," or "design" — a place where each of us can freely write our own beginning and direction.\nAs designers, we are still in the process of completing that sentence, one step at a time.\nThis exhibition was created to capture a moment where our dreams and potential come together in a single, visual expression.\nThe vibrant trajectories radiating from the center of the poster symbolize the time, thoughts, and energy we\'ve accumulated through learning design —\nnow bursting outward as a powerful force of possibility.\nThe irregular, colorful lines represent our unique journeys and identities.\n At the same time, they point to infinite directions in which our creativity can grow and expand.\nThis exhibition is a visual unfolding of potential in motion a vivid explosion born from the convergence of colors and lines that each began from a different place, yet came together in one striking moment.',
  subTitle: '전시 메이킹 영상',
  subDescription:
    '미술 전시의 틀을 깨는 졸업 작품들이 유전자 편집 기술로 재구성될 가능성이 제기되었습니다. 연구에 따르면, 캔버스 위의 시간은 붓 터치 하나로 뒤섞이며, 조형물의 형태는 졸업 시즌마다 변주된다고 합니다. 이는 단순한 전시 기획을 넘어 퍼포먼스적 공간 해체에도 활용될 수 있어, 갤러리 벽이 사라질 날도 머지않았다는 예측이 나옵니다. 윤곽이 사라진 액자는 의미의 경계를 허물고, 조명 아래 떠오르는 그림자는 졸업생들의 시선에 따라 다시 태어납니다. 물론 논란도 존재하지만, 관계자들은 이 흐름이 예술과 전시의 새로운 파장을 일으킬 것으로 기대하고 있습니다.',
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
              <video width="100%" height="100%" controls>
                <source src="/path/to/video.mp4" type="video/mp4" />
              </video>
            </S.VideoImageWrapper>
          </S.ColumnWrapper>
        </S.VideoWrapper>
        <S.MobileBottomImageWrapper>
          <Image src={ExhibitionIcon} alt="exhibition" />
        </S.MobileBottomImageWrapper>
      </CommonContainer>
      <Footer footerType="sub" backgroundColor="white" />
    </>
  );
}
