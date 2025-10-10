import UploadIcon from '@/assets/icons/uploadIcon.svg';
import * as S from './UploadBox.style';

interface UploadBoxProps {
  description?: string;
  onFileUpload?: (files: File[]) => void;
  uploadedImage?: string | null;
  isThumbnail?: boolean;
}

export const UploadBox = ({
  description = '',
  onFileUpload,
  uploadedImage,
  isThumbnail = false
}: UploadBoxProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0 && onFileUpload) {
      onFileUpload(files);
    }
  };

  const inputId = isThumbnail ? 'thumbnail-input' : 'additional-images-input';
  const acceptAttribute = isThumbnail ? 'image/*' : 'image/*,video/mp4';

  return (
    <S.Wrapper htmlFor={inputId} $isThumbnail={isThumbnail} $hasUploadedImage={!!(uploadedImage && isThumbnail)}>
      {uploadedImage && isThumbnail ? (
        <S.ThumbnailImage src={uploadedImage} alt="Uploaded thumbnail" />
      ) : (
        <>
          <UploadIcon />
          <S.TextContainer>이미지 업로드{description && ` ${description}`}</S.TextContainer>
        </>
      )}
      <input
        id={inputId}
        type="file"
        multiple={!isThumbnail}
        hidden
        accept={acceptAttribute}
        onChange={handleFileChange}
      />
    </S.Wrapper>
  );
};
