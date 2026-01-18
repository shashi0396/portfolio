import type { NextConfig } from 'next'

const repoName = 'portfolio'

const nextConfig: NextConfig = {
  output: 'export',

  // 🔑 THIS fixes your 404 _next/static issue
  distDir: 'docs',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // 🔑 Required for GitHub Pages
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
}

export default nextConfig
