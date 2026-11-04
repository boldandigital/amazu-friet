/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: one build serves Vercel and the Open Design HTML artifact.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
