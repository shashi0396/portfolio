import type { NextConfig } from 'next'

const repoName = 'portfolio'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`, // ❗ NO trailing slash

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
}

export default nextConfig
