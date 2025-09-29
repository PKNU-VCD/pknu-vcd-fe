'use client';

import { CommonContainer } from '@/app/introduce/common.styles';
import IntroLogo from '@/assets/icons/sub/intro.svg';
import MobileIntroLogo from '@/assets/icons/sub/mobile/intro.svg';
import MobileDesignUnion from '@/assets/icons/sub/mobile/Union_design.svg';
import DesignUnion from '@/assets/icons/sub/Union_design.svg';
import ButtonList from '@/components/buttonlist/architect/ButtonList';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { SearchBar } from '@/components/searchBar/SearchBar';
import { ThumbnailGrid } from '@/components/thumbnailGrid/ThumbnailGrid';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import * as S from './page.styles';

const projects = [
  {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
  },
  {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
  },
  {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
  },
  {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
  },
  {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
  },
  {
    title: '프로젝트 제목',
    designer: '디자이너 이름',
    imageUrl: 'https://i.pinimg.com/1200x/69/26/1b/69261bec7bcf155e6501475eccd7dc31.jpg',
  },
];

export default function Architect() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);

  return (
    <>
      <Header headerType="main" />
      <CommonContainer>
        <S.DesignerContainer>
          <S.Title>
            제 37회 2025 국립부경대학교
            {isMobile && <br />}
            시각디자인전공 졸업전시회
            {!isMobile && ' 디자인 프로젝트'}
          </S.Title>
          <S.LogoWrapper>
            {isMobile ? <MobileIntroLogo /> : <IntroLogo />}
            <S.UnionWrapper>{isMobile ? <MobileDesignUnion /> : <DesignUnion />}</S.UnionWrapper>
          </S.LogoWrapper>
        </S.DesignerContainer>
        {isMobile ? (
          <>
            <S.MenuListContainer>
              <ButtonList />
            </S.MenuListContainer>
            <S.SearchContainer>
              <SearchBar />
            </S.SearchContainer>
          </>
        ) : (
          <>
            <S.SearchContainer>
              <SearchBar />
            </S.SearchContainer>
            <S.MenuListContainer>
              <ButtonList />
            </S.MenuListContainer>
          </>
        )}
        <S.ThumbnailGridContainer>
          <ThumbnailGrid projects={projects} />
        </S.ThumbnailGridContainer>
        <Footer footerType="sub" />
      </CommonContainer>
    </>
  );
}
