import { uploadMultipleImages, uploadSingleImage } from '@/apis/upload';
import { CATEGORY_MAP } from '@/constants/categories';
import { ProjectUpdateRequest } from '@/types/api';
import { ProjectBase } from '@/types/project';

export interface ProjectSubmitData extends ProjectBase {
  thumbnail: File | null;
  thumbnailPreview: string | null;
  images: (File | null)[];
  imagePreviews: (string | null)[];
  isEditMode: boolean;
}

export async function prepareProjectPayload(
  data: ProjectSubmitData,
): Promise<ProjectUpdateRequest> {
  const {
    category,
    projectKr,
    projectEn,
    designerKr,
    designerEn,
    email,
    descriptionKr,
    descriptionEn,
    thumbnail,
    thumbnailPreview,
    images,
    imagePreviews,
    isEditMode,
  } = data;

  let thumbnailUrl: string;
  if (thumbnail) {
    thumbnailUrl = await uploadSingleImage(thumbnail);
  } else if (isEditMode && thumbnailPreview) {
    thumbnailUrl = thumbnailPreview;
  } else {
    throw new Error('썸네일 이미지가 필요합니다.');
  }

  const newFiles = images.filter(f => f !== null) as File[];
  const uploadedUrls = newFiles.length > 0 ? await uploadMultipleImages(newFiles) : [];

  let uploadIndex = 0;
  const orderedUrls = imagePreviews
    .map((preview, idx) => {
      if (images[idx]) {
        return uploadedUrls[uploadIndex++];
      }
      return preview || null;
    })
    .filter((url): url is string => Boolean(url));

  return {
    designerEmail: email,
    designerName: {
      kr: designerKr,
      en: designerEn,
    },
    projectName: {
      kr: projectKr,
      en: projectEn,
    },
    description: {
      kr: descriptionKr,
      en: descriptionEn,
    },
    categories: [CATEGORY_MAP[category]],
    thumbnailUrl,
    fileUrls: orderedUrls.map((url, i) => ({
      displayOrder: i + 1,
      url,
    })),
  };
}
