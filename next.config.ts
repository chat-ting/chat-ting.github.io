import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://chat-ting.github.io/chat-ting.github.io' : '',
  output: 'export',
  distDir: 'out',
}

export default nextConfig
