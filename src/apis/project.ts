import { ApiResponse, ProjectUpdateRequest } from '@/types/api';
import type { Project } from '@/types/project';
import { http } from './http';

export async function getProjects() {
  return http.get<ApiResponse<Project[]>>('/projects');
}

export async function getProject(projectId: number) {
  return http.get<ApiResponse<Project>>(`/projects/${projectId}`);
}

export async function fetchProjects() {
  return http.get<ApiResponse<Project[]>>('/admin/projects');
}

export async function fetchProject(projectId: string) {
  return http.get<ApiResponse<Project>>(`/admin/projects/${projectId}`);
}

export async function createProject(data: ProjectUpdateRequest) {
  return http.postJson<ApiResponse<Project>>('/admin/projects', data);
}

export async function updateProject(projectId: string, data: ProjectUpdateRequest) {
  return http.put<ApiResponse<Project>>(`/admin/projects/${projectId}`, data);
}
