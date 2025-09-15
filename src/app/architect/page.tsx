'use client';

import IntroLogo from '@/assets/icons/sub/intro.svg';
import DesignUnion from '@/assets/icons/sub/Union_design.svg';
import ButtonList from '@/components/buttonlist/architect/ButtonList';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { SearchBar } from '@/components/searchBar/SearchBar';
import { ThumbnailGrid } from '@/components/thumbnailGrid/ThumbnailGrid';
import * as S from './page.styles';


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
      <Footer footerType="sub" />
    </>
  );
}
