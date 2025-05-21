/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 specific configurations
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
      },
    ],
    unoptimized: true,
  },
  // Disable static optimization for this app
  // This helps with Next.js 15's new caching behavior
  staticPageGenerationTimeout: 0,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
