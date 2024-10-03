/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // This enables static export
  trailingSlash: true, // Ensures URLs are compatible with GitHub Pages
  assetPrefix: isProd ? '/Simple-Todo-App/' : '', // GitHub repo name
  basePath: isProd ? '/Simple-Todo-App' : '', // GitHub repo name
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;