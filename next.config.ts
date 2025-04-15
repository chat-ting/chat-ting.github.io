import type { NextConfig } from 'next'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()
const nextConfig: NextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://chat-ting.github.io/chat-ting.github.io' : '',
  output: 'export',
  distDir: 'out',
}

export default withVanillaExtract(nextConfig)
