'use client';

import { getProjects } from '@/apis/project';
import { CommonContainer } from '@/app/introduce/common.styles';
import IntroLogo from '@/assets/icons/sub/intro.svg';
import MobileIntroLogo from '@/assets/icons/sub/mobile/intro.svg';
import MobileDesignUnion from '@/assets/icons/sub/mobile/Union_design.svg';
import DesignUnion from '@/assets/icons/sub/Union_design.svg';
import ArchitectButton from '@/components/buttonList/architect/ArchitectButton';
import Footer from '@/components/footer/Footer';
import dynamic from 'next/dynamic';

const FireworkBackground = dynamic(
  () => import('@/components/fireworkBackground/FireworkBackground'),
  { ssr: false },
);
import Header from '@/components/header/Header';
import { SearchBar } from '@/components/searchBar/SearchBar';
import { ThumbnailGrid } from '@/components/thumbnailGrid/ThumbnailGrid';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import { Project } from '@/types/project';
import { useEffect, useState } from 'react';
import * as S from './page.styles';

export default function Architect() {
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(res => {
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <FireworkBackground color={theme.colors.lightGreen} />
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
              <ArchitectButton />
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
              <ArchitectButton />
            </S.MenuListContainer>
          </>
        )}
        <S.ThumbnailGridContainer>
          <ThumbnailGrid
            projects={projects.map(project => ({
              title: project.projectNameKr,
              designer: project.designerNameKr,
              imageUrl: project.thumbnailUrl,
            }))}
          />
        </S.ThumbnailGridContainer>
        <Footer footerType="sub" backgroundColor="white" />
      </CommonContainer>
    </>
  );
}
