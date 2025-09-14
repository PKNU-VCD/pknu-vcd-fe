export interface LocalizedText {
  kr: string;
  en?: string;
}

export interface FileInfo {
  fileName: string;
  fileSize: number;
  contentType: string;
}

export interface FileWithOrder {
  url: string;
  displayOrder?: number;
}
export interface Project {
  projectId: number;
  category: string;
  projectNameKr: string;
  projectEn?: string;
  designerNameKr: string;
  designerEn: string;
  email: string;
  descriptionKr: string;
  descriptionEn?: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}
