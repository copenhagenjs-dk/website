/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/website',
  assetPrefix: '/website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
