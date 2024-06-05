/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: 's3-sa-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
