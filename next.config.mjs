/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
