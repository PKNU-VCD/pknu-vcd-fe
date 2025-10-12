'use client';

import { getProject } from '@/apis/project';
import ProjectDetailModal from '@/app/components/projectDetailModal';
import { Project } from '@/types/project';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number(params.projectId);
  const [data, setData] = useState<Project | null>(null);

  useEffect(() => {
    getProject(projectId)
      .then(r => r.data)
      .then(setData);
  }, [projectId]);

  const handleClose = () => router.push('/architect');

  if (!data) return null;

  return <ProjectDetailModal data={data} onClose={handleClose} />;
}
