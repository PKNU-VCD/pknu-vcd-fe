'use client';

import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyles';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
