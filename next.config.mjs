import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com'],
    },
    eslint: {
        ignoreDuringBuilds: true, // Add this line to ignore ESLint errors in production build
    },
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript type errors during builds
    },
};

export default withNextIntl(nextConfig);
