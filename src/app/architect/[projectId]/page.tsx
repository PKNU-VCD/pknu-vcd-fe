'use client';

import { getProject } from '@/apis/project';
import ProjectDetailModal from '@/app/components/projectDetailModal';
import FireworkBackground from '@/components/fireworkBackground/FireworkBackground';
import Header from '@/components/header/Header';
import { theme } from '@/styles/theme';
import { ProjectDetail } from '@/types/project';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const router = useRouter();
  const [data, setData] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    params.then(resolvedParams => {
      getProject(Number(resolvedParams.projectId))
        .then(r => r.data as unknown as ProjectDetail)
        .then(setData)
        .catch(() => setData(null));
    });
  }, [params]);

  const handleClose = () => router.push('/architect');

  if (!data) return null;

  return (
    <>
      <FireworkBackground color={theme.colors.lightGreen} />
      <Header headerType="main" />
      <ProjectDetailModal data={data} onClose={handleClose} />
    </>
  );
}
