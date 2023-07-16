/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [992, 1200, 1400, 1920],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
