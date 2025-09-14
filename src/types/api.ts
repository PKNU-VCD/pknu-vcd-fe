import { FileWithOrder, LocalizedText } from './project';

export class HttpError extends Error {
  constructor(
    public status: number,
    message?: string,
  ) {
    super(message ?? String(status));
  }
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: string | null;
}

export interface ProjectApiResponse {
  projectId: number;
  designerEmail: string;
  designerName: LocalizedText;
  projectName: LocalizedText;
  description: LocalizedText;
  categories: string[];
  thumbnailUrl: string;
  files: FileWithOrder[];
}

export interface ProjectUpdateRequest {
  designerEmail: string;
  designerName: LocalizedText;
  projectName: LocalizedText;
  description: LocalizedText;
  categories: string[];
  thumbnailUrl: string;
  fileUrls: Array<{
    displayOrder: number;
    url: string;
  }>;
}

export interface PresignedUrlResponse {
  presignedUrl: string;
  fileUrl: string;
}
