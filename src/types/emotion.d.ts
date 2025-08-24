import { theme } from '@/styles/theme';
import '@emotion/react';

type AppTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends AppTheme {
    primary: string; // 네트리파이 오류 해결을 위한 임시 타입
  }
}
