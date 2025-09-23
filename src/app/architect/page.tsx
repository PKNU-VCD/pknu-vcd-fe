'use client';

import IntroLogo from '@/assets/icons/sub/intro.svg';
import DesignUnion from '@/assets/icons/sub/Union_design.svg';
import ButtonList from '@/components/buttonlist/architect/ButtonList';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { SearchBar } from '@/components/searchBar/SearchBar';
import { ThumbnailGrid } from '@/components/thumbnailGrid/ThumbnailGrid';
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
  return (
    <>
      <Header headerType="main" />
      <S.DesignerContainer>
        <S.LogoText>
          제 37회 2025 국립부경대학교 시각디자인전공 졸업전시회 디자인 프로젝트
        </S.LogoText>
        <S.LogoWrapper>
          <IntroLogo />
          <S.UnionWrapper>
            <DesignUnion />
          </S.UnionWrapper>
        </S.LogoWrapper>
      </S.DesignerContainer>
      <S.SearchContainer>
        <SearchBar />
      </S.SearchContainer>
      <S.MenuListContainer>
        <ButtonList />
      </S.MenuListContainer>
      <S.ThumbnailGridContainer>
        <ThumbnailGrid projects={projects} />
      </S.ThumbnailGridContainer>
      <Footer footerType="sub" />
    </>
  );
}
