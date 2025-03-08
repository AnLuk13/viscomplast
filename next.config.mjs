import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // ✅ Use modern formats for better performance
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line to ignore ESLint errors in production build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript type errors during builds
  },
  compress: true, // ✅ Enable Gzip/Brotli compression for smaller file sizes
  experimental: {
    optimizeCss: true, // ✅ Reduce render-blocking CSS
  },
};

export default withNextIntl(nextConfig);
