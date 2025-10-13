'use client';

import { getProjects } from '@/apis/project';
import { CommonContainer } from '@/app/introduce/common.styles';
import IntroLogo from '@/assets/icons/sub/intro.svg';
import MobileIntroLogo from '@/assets/icons/sub/mobile/intro.svg';
import MobileDesignUnion from '@/assets/icons/sub/mobile/Union_design.svg';
import DesignUnion from '@/assets/icons/sub/Union_design.svg';
import ArchitectButton from '@/components/buttonList/architect/ArchitectButton';
import FireworkBackground from '@/components/fireworkBackground/FireworkBackground';
import Footer from '@/components/footer/Footer';
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProjects().then(res => {
      setProjects(res.data);
    });
  }, []);

  const filteredProjects = projects.filter(project => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.some(cat => {
        const match = project.categories?.some(c => c.toUpperCase() === cat.toUpperCase());
        return match;
      });

    const searchMatch =
      searchTerm === '' ||
      project.projectNameKr?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.designerNameKr?.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

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
              <ArchitectButton onCategoryChange={handleCategoryChange} />
            </S.MenuListContainer>
            <S.SearchContainer>
              <SearchBar onSearchChange={handleSearchChange} />
            </S.SearchContainer>
          </>
        ) : (
          <>
            <S.SearchContainer>
              <SearchBar onSearchChange={handleSearchChange} />
            </S.SearchContainer>
            <S.MenuListContainer>
              <ArchitectButton onCategoryChange={handleCategoryChange} />
            </S.MenuListContainer>
          </>
        )}
        <S.ThumbnailGridContainer>
          <ThumbnailGrid
            projects={filteredProjects.map(project => ({
              id: project.projectId,
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
