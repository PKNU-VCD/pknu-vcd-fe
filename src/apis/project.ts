import { ApiResponse } from '@/types/api';
import type { Project } from '@/types/project';
import { http } from './http';

export async function fetchProjects() {
  return http.get<ApiResponse<Project[]>>('/admin/projects');
}
