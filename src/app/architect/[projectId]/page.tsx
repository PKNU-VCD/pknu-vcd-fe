'use client';

import { getProject, getProjects } from '@/apis/project';
import ProjectDetailModal from '@/app/components/projectDetailModal';
import FireworkBackground from '@/components/fireworkBackground/FireworkBackground';
import Header from '@/components/header/Header';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import { Project, ProjectDetail } from '@/types/project';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const router = useRouter();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);
  const [data, setData] = useState<ProjectDetail | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // 모달 페이지에서 배경 스크롤 방지
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    getProjects().then(res => setProjects(res.data));
  }, []);

  useEffect(() => {
    params.then(resolvedParams => {
      getProject(Number(resolvedParams.projectId))
        .then(r => r.data as unknown as ProjectDetail)
        .then(setData)
        .catch(() => setData(null));
    });
  }, [params]);

  const filteredProjects = projects.filter(project => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.some(cat =>
        project.categories?.some(c => c.toUpperCase() === cat.toUpperCase()),
      );

    const searchMatch =
      searchTerm === '' ||
      project.projectNameKr?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.designerNameKr?.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleCategoryChange = (categories: string[]) => setSelectedCategories(categories);
  const handleSearchChange = (term: string) => setSearchTerm(term);
  const handleClose = () => router.push('/architect');

  return (
    <>
      <FireworkBackground color={theme.colors.lightGreen} />
      <Header headerType="main" />
      {data && <ProjectDetailModal data={data} onClose={handleClose} />}
    </>
  );
}
