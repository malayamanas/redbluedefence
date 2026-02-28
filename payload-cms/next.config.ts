import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    reactCompiler: false,
  },
  // Prevent webpack from bundling native Node modules used by @libsql/client, drizzle, and pino
  serverExternalPackages: [
    '@libsql/client',
    '@libsql/darwin-x64',
    '@libsql/core',
    '@node-rs/argon2',
    '@node-rs/bcrypt',
    'drizzle-kit',
    'drizzle-orm',
    '@payloadcms/db-sqlite',
    'pino-pretty',
    'pino',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudflare.com',
      },
    ],
  },
  webpack: (config) => {
    return config
  },
}

export default withPayload(nextConfig)
