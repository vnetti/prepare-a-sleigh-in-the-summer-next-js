/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [992, 1200, 1400, 1920],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false
      },
    };
    return config
  },
};

module.exports = nextConfig;
