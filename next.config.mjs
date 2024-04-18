/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
};

export default nextConfig;
