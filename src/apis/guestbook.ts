import { ApiResponse } from '@/types/api';
import { http } from './http';

export interface Guestbook {
  id: number;
  content: string;
  createdAt: string;
}

export interface GuestbookCreateRequest {
  content: string;
}

export async function fetchGuestbooks() {
  return http.get<ApiResponse<Guestbook[]>>('/guestbooks');
}

export async function createGuestbook(data: GuestbookCreateRequest) {
  return http.postJson<ApiResponse<Guestbook>>('/guestbooks', data);
}
