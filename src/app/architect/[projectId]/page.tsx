import { getProject } from '@/apis/project';
import { ProjectDetail } from '@/types/project';
import { Metadata } from 'next';
import ProjectDetailContent from './ProjectDetailContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const response = await getProject(Number(resolvedParams.projectId));
    const data = response.data as unknown as ProjectDetail;

    const title = `${data.projectName.kr} - ${data.designerName.kr} | PKNU VCD 2025`;
    const description = data.description.kr || data.description.en || '2025 부경대학교 시각디자인과 졸업전시';
    const imageUrl = data.thumbnailUrl || 'https://www.pknuvcd2025.site/og-image.png';

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://www.pknuvcd2025.site/architect/${resolvedParams.projectId}`,
        siteName: 'PKNU VCD 2025',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: `${data.projectName.kr} - ${data.designerName.kr}`,
          },
        ],
        locale: 'ko_KR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [imageUrl],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'PKNU VCD 2025 졸업전시',
      description: '2025 부경대학교 시각디자인과 졸업전시',
    };
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  try {
    const resolvedParams = await params;
    const response = await getProject(Number(resolvedParams.projectId));
    const data = response.data as unknown as ProjectDetail;

    return <ProjectDetailContent data={data} />;
  } catch (error) {
    console.error('Error loading project:', error);
    return null;
  }
}
