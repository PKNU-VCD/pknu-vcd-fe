import { ApiResponse, PresignedUrlResponse } from '@/types/api';
import { FileInfo } from '@/types/project';
import { http } from './http';

export async function getPresignedUrl(fileInfo: FileInfo) {
  return http.postJson<ApiResponse<PresignedUrlResponse>>(
    '/admin/projects/presigned-url',
    fileInfo,
  );
}

export async function getBatchPresignedUrls(files: FileInfo[]) {
  return http.postJson<ApiResponse<PresignedUrlResponse[]>>('/admin/projects/presigned-url/batch', {
    files,
  });
}

export async function uploadFileToS3(presignedUrl: string, file: File): Promise<void> {
  const response = await fetch(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
      'Content-Length': file.size.toString(),
    },
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status}`);
  }
}

export async function uploadSingleImage(file: File): Promise<string> {
  const fileInfo: FileInfo = {
    fileName: file.name,
    fileSize: file.size,
    contentType: file.type,
  };

  const presignedResponse = await getPresignedUrl(fileInfo);
  const { presignedUrl, fileUrl } = presignedResponse.data;

  await uploadFileToS3(presignedUrl, file);

  return fileUrl;
}

export async function uploadMultipleImages(files: File[]): Promise<string[]> {
  if (files.length === 0) return [];

  const fileInfos: FileInfo[] = files.map(file => ({
    fileName: file.name,
    fileSize: file.size,
    contentType: file.type,
  }));

  const batchResponse = await getBatchPresignedUrls(fileInfos);
  const presignedData = batchResponse.data;

  const uploadPromises = files.map((file, index) =>
    uploadFileToS3(presignedData[index].presignedUrl, file),
  );

  await Promise.all(uploadPromises);

  return presignedData.map(data => data.fileUrl);
}
