import type { NextConfig } from 'next'

const repoName = 'portfolio'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',

  basePath: `/${repoName}`,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
}

export default nextConfig
