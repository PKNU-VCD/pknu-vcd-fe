import { useCallback, useEffect, useState } from 'react';

export function useImageManagement() {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [images, setImages] = useState<(File | null)[]>(Array(10).fill(null));
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>(Array(10).fill(null));

  const revokeObjectUrl = (url: string | null) => {
    if (url && url.startsWith('blob:')) {
      URL.revokeObjectURL(url);
    }
  };

  const handleThumbnailUpload = (files: File[]) => {
    const file = files[0];
    if (file) {
      setThumbnail(file);
      revokeObjectUrl(thumbnailPreview);
      const objectUrl = URL.createObjectURL(file);
      setThumbnailPreview(objectUrl);
    }
  };

  const handleAdditionalImagesUpload = (files: File[]) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];

    const currentImageCount = newImages.filter(img => img !== null).length;
    const availableSlots = 10 - currentImageCount;

    if (files.length > availableSlots) {
      const message =
        availableSlots === 0
          ? '이미지는 최대 10장까지만 업로드할 수 있습니다.'
          : `이미지는 최대 10장까지만 업로드할 수 있습니다. ${availableSlots}장만 더 추가할 수 있습니다.`;
      alert(message);
      if (availableSlots === 0) return;
    }

    const filesToUpload = files.slice(0, availableSlots);

    filesToUpload.forEach(file => {
      const emptyIndex = newImages.findIndex(img => img === null);
      if (emptyIndex !== -1) {
        newImages[emptyIndex] = file;
        revokeObjectUrl(newPreviews[emptyIndex]);
        const objectUrl = URL.createObjectURL(file);
        newPreviews[emptyIndex] = objectUrl;
      }
    });

    setImagePreviews(newPreviews);
    setImages(newImages);
  };

  const handleSingleImageUpload = (file: File, index: number) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];

    newImages[index] = file;
    revokeObjectUrl(newPreviews[index]);
    const objectUrl = URL.createObjectURL(file);
    newPreviews[index] = objectUrl;

    setImagePreviews(newPreviews);
    setImages(newImages);
  };

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];

    const movedImage = newImages[fromIndex];
    const movedPreview = newPreviews[fromIndex];

    newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);

    newPreviews.splice(fromIndex, 1);
    newPreviews.splice(toIndex, 0, movedPreview);

    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const setImagePreviewsFromUrls = useCallback((urls: string[]) => {
    const newImagePreviews = Array(10).fill(null);
    urls.forEach((url, index) => {
      if (index < 10) {
        newImagePreviews[index] = url;
      }
    });
    setImagePreviews(newImagePreviews);
  }, []);

  useEffect(() => {
    return () => {
      revokeObjectUrl(thumbnailPreview);
      imagePreviews.forEach(revokeObjectUrl);
    };
  }, [thumbnailPreview, imagePreviews]);

  return {
    thumbnail,
    setThumbnail,
    thumbnailPreview,
    setThumbnailPreview,
    images,
    setImages,
    imagePreviews,
    setImagePreviews,
    handleThumbnailUpload,
    handleAdditionalImagesUpload,
    handleSingleImageUpload,
    moveImage,
    setImagePreviewsFromUrls,
  };
}
