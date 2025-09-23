'use client';

import GlobalStyle from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
