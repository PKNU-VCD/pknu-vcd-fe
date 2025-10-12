import ClientProviders from '@/components/clientProvider';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';

const suit = localFont({
  src: '../../public/fonts/SUIT-Variable.woff2',
  display: 'swap',
  variable: '--font-suit',
  preload: true,
});

export const metadata = {
  title: '2025 PKNU VCD 졸업전시',
  description: '2025 부경대학교 시각디자인과 졸업전시 웹사이트입니다.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'PKNU VCD 2025',
    description: '부경대학교 시각디자인과 졸업전시 웹사이트',
    url: 'https://www.pknuvcd2025.site',
    siteName: 'PKNU VCD 2025',
    images: [
      {
        url: 'https://www.pknuvcd2025.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PKNU VCD 2025 썸네일',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PKNU VCD 2025',
    description: '부경대학교 시각디자인과 졸업전시 웹사이트',
    images: ['https://www.pknuvcd2025.site/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={suit.variable}>
      <body className={suit.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
