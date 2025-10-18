import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    // Production 최적화
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pknuvcd2025.site',
        pathname: '/**', // 모든 경로 허용
      },
    ],
    deviceSizes: [320, 480, 768, 1024, 1200],
    imageSizes: [256, 384, 640, 750, 828, 1080],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1년
  },
  // Production 빌드 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 불필요한 소스맵 제거
  productionBrowserSourceMaps: false,
};

export default nextConfig;
