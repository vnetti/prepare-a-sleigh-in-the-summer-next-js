/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [992, 1200, 1400],
    formats: ['image/webp']
  }
}

module.exports = nextConfig
