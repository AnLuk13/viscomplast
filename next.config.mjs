import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flagcdn.com'],
    },
};

export default withNextIntl(nextConfig);
