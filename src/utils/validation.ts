export interface FormValidationProps {
  category: string[];
  projectKr: string;
  designerKr: string;
  designerEn: string;
  email: string;
  descriptionKr: string;
  thumbnail: File | null;
  thumbnailPreview: string | null;
  isEditMode: boolean;
}

export function validateProjectForm(props: FormValidationProps): boolean {
  const {
    category,
    projectKr,
    designerKr,
    designerEn,
    email,
    descriptionKr,
    thumbnail,
    thumbnailPreview,
    isEditMode,
  } = props;

  const valid = Boolean(
    category.length > 0 &&
      projectKr.trim() &&
      designerKr.trim() &&
      designerEn.trim() &&
      email.trim() &&
      (thumbnail || (isEditMode && thumbnailPreview)) &&
      descriptionKr.trim(),
  );

  return valid;
}
