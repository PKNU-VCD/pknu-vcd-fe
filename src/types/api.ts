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
