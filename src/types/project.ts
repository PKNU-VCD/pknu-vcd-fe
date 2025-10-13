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

export interface ProjectBase {
  category: string[];
  projectKr: string;
  projectEn: string;
  designerKr: string;
  designerEn: string;
  email: string;
  descriptionKr: string;
  descriptionEn: string;
}

export interface Project extends ProjectBase {
  projectId: number;
  thumbnailUrl: string;
  categories: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
  designerNameKr: string;
  projectNameKr: string;
}

export interface ProjectDetail {
  projectId: number;
  categories: string[];
  thumbnailUrl: string;
  description: {
    kr: string;
    en: string;
  };
  designerName: {
    kr: string;
    en: string;
  };
  projectName: {
    kr: string;
    en: string;
  };
  designerEmail: string;
  files: FileWithOrder[];
}
