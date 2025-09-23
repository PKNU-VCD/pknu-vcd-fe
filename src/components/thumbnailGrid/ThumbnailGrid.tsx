import { Thumbnail } from './thumbnail/Thumbnail';
import * as S from './ThumbnailGrid.styles';

interface Project {
  title: string;
  designer: string;
  imageUrl: string;
}

interface ThumbnailGridProps {
  /** 프로젝트 리스트 */
  projects: Project[];
}

export const ThumbnailGrid = ({ projects }: ThumbnailGridProps) => {
  return (
    <S.Wrapper>
      {projects.map((project, index) => (
        <S.ThumbnailContainer key={index}>
          <Thumbnail
            title={project.title}
            designer={project.designer}
            imageUrl={project.imageUrl}
            onClick={() => {}}
          />
        </S.ThumbnailContainer>
      ))}
    </S.Wrapper>
  );
};
