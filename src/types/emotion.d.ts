import { theme } from '@/styles/theme';
import '@emotion/react';

type AppTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
