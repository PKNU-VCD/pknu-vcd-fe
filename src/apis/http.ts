import { HttpError } from '@/types/api';

export const API_BASE = process.env.NEXT_PUBLIC_BASE_URL!;

type HttpOptions = {
  method?: 'GET' | 'POST' | 'PUT';
  body?: BodyInit | null;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
};

async function request<T>(path: string, options: HttpOptions = {}): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: options.method ?? 'GET',
    body: options.body,
    credentials: options.credentials ?? 'include', // 세션 쿠키 포함
    headers: {
      ...options.headers,
    },
  });

  const json = await res
    .clone()
    .json()
    .catch(() => ({}));

  if (!res.ok) {
    if (res.status === 401) {
      // 세션 만료시 로그인 페이지로 리디렉션
      window.location.href = '/admin';
      return Promise.reject(
        new HttpError(res.status, '세션이 만료되었습니다. 다시 로그인해주세요.'),
      );
    }
    throw new HttpError(res.status, json?.message);
  }
  return json as T;
}

export const http = {
  get: <T>(path: string, options?: Omit<HttpOptions, 'method' | 'body'>) =>
    request<T>(path, { ...options, method: 'GET' }),

  post: <T>(
    path: string,
    body: Record<string, string> | FormData,
    options?: Omit<HttpOptions, 'method' | 'body'>,
  ) => {
    let payload: BodyInit;
    if (body instanceof FormData) {
      payload = body;
    } else {
      const fd = new FormData();
      Object.entries(body).forEach(([k, v]) => fd.append(k, v));
      payload = fd;
    }

    return request<T>(path, { ...options, method: 'POST', body: payload });
  },

  postJson: <T>(path: string, data: unknown, options?: Omit<HttpOptions, 'method' | 'body'>) =>
    request<T>(path, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', ...options?.headers },
    }),

  put: <T>(path: string, data: unknown, options?: Omit<HttpOptions, 'method' | 'body'>) =>
    request<T>(path, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', ...options?.headers },
    }),
};
