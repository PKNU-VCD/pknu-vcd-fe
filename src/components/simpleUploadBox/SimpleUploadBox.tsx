import FileUploadIcon from '@/assets/icons/FileUploadIcon.svg';
import * as S from './SimpleUploadBox.styles';

interface SimpleUploadBoxProps {
  index: number;
  uploadedImage?: string | null;
  onFileUpload?: (file: File, index: number) => void;
  onDragStart?: (index: number) => void;
  onDragOver?: (index: number) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
}

export const SimpleUploadBox = ({
  index,
  uploadedImage,
  onFileUpload,
  onDragStart,
  onDragOver,
  onDragEnd,
  isDragging = false,
}: SimpleUploadBoxProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onFileUpload) {
      onFileUpload(file, index);
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    onDragStart?.(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    onDragOver?.(index);
  };

  const handleDragEnd = () => {
    onDragEnd?.();
  };

  const inputId = `simple-upload-${index}`;

  const isVideo = uploadedImage &&
    (uploadedImage.endsWith('.mp4') || uploadedImage.includes('video/mp4'));

  return (
    <S.Wrapper
      draggable={!!uploadedImage}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <S.FileInput
        id={inputId}
        type="file"
        accept="image/*,video/mp4"
        onChange={handleFileChange}
        hidden
      />
      <S.Label htmlFor={inputId}>
        {uploadedImage ? (
          isVideo ? (
            <S.UploadedImage as="video" src={uploadedImage} muted loop autoPlay />
          ) : (
            <S.UploadedImage src={uploadedImage} alt={`Uploaded image ${index + 1}`} />
          )
        ) : (
          <FileUploadIcon />
        )}
        <S.NumberBadge>{index + 1}</S.NumberBadge>
      </S.Label>
    </S.Wrapper>
  );
};