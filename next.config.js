const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lucide-react'],
  outputFileTracingRoot: path.join(__dirname, './'),
}

module.exports = nextConfig
