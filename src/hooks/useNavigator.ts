'use client';
import { useRouter } from 'next/navigation';

export function useNavigator() {
  const router = useRouter();

  const navigateTo = (path: string) => router.push(path);
  const back = () => router.back();
  const refresh = () => router.refresh();

  return { navigateTo, back, refresh };
}
