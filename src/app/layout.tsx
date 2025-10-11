import ClientProviders from '@/components/clientProvider';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

const suit = localFont({
  src: '../../public/fonts/SUIT-Variable.woff2',
  display: 'swap',
  variable: '--font-suit',
  preload: true,
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={suit.variable}>
      <body className={suit.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
