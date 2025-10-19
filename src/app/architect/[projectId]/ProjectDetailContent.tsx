'use client';

import ProjectDetailModal from '@/app/components/projectDetailModal';
import FireworkBackground from '@/components/fireworkBackground/FireworkBackground';
import Header from '@/components/header/Header';
import { theme } from '@/styles/theme';
import { ProjectDetail } from '@/types/project';
import { useRouter } from 'next/navigation';

interface ProjectDetailContentProps {
  data: ProjectDetail;
}

export default function ProjectDetailContent({ data }: ProjectDetailContentProps) {
  const router = useRouter();

  const handleClose = () => router.push('/architect');

  return (
    <>
      <FireworkBackground color={theme.colors.lightGreen} />
      <Header headerType="main" />
      <ProjectDetailModal data={data} onClose={handleClose} />
    </>
  );
}
