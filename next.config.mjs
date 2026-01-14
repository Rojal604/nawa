/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nawa',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
