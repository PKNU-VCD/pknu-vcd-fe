'use client';

import { getProject } from '@/apis/project';
import ProjectDetailModal from '@/app/components/projectDetailModal';
import { Project } from '@/types/project';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectModal({ params }: { params: Promise<{ projectId: string }> }) {
  const router = useRouter();
  const [data, setData] = useState<Project | null>(null);

  useEffect(() => {
    params.then(resolvedParams => {
      getProject(Number(resolvedParams.projectId))
        .then(r => r.data)
        .then(setData);
    });
  }, [params]);

  const handleClose = () => router.back();

  if (!data) return null;

  return <ProjectDetailModal data={data} onClose={handleClose} />;
}
