import * as S from './Thumbnail.styles';

interface ThumbnailProps {
  title: string;
  designer: string;
  imageUrl: string;
  onClick?: () => void;
  isBlurred?: boolean;
}

export const Thumbnail = ({
  title,
  designer,
  imageUrl,
  onClick,
  isBlurred = false,
}: ThumbnailProps) => {
  return (
    <S.Wrapper onClick={onClick} $isBlurred={isBlurred}>
      <S.ImageContainer src={imageUrl} alt={title} />
      <S.OverlayContainer className="overlay">
        <S.TitleContainer>{title}</S.TitleContainer>
        <S.DesignerContainer>{designer}</S.DesignerContainer>
      </S.OverlayContainer>
    </S.Wrapper>
  );
};
