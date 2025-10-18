import Image from 'next/image';
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
      <S.ImageContainer>
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={0}
          quality={75}
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
        />
      </S.ImageContainer>
      <S.OverlayContainer className="overlay">
        <S.TitleContainer>{title}</S.TitleContainer>
        <S.DesignerContainer>{designer}</S.DesignerContainer>
      </S.OverlayContainer>
    </S.Wrapper>
  );
};
