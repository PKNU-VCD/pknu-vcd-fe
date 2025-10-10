import { http } from '@/apis/http';
import { HttpError } from '@/types/api';
import { useEffect, useState } from 'react';

type Me = { username: string };

const AUTH_STORAGE_KEY = 'pknu-vcd-auth';

export function useAuth() {
  const [me, setMe] = useState<Me | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        setMe(parsed);
      } catch (e) {
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
    setIsInitialized(true);
  }, []);

  const login = async (username: string, password: string) => {
    setError(null);
    try {
      await http.post('/login', { username, password });
      const user = { username };
      setMe(user);
      sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      const err = error as HttpError;
      if (err.status === 401) setError('아이디 또는 비밀번호가 올바르지 않습니다.');
      else if (err.status === 409) setError('다른 기기의 세션이 종료되고 새로 로그인되었습니다.');
      else setError('로그인에 실패했습니다. 잠시 후 다시 시도해주세요.');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await http.post('/logout', {});
    } finally {
      setMe(null);
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    }
  };

  return { me, error, isInitialized, login, logout };
}
