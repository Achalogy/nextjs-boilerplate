/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs');
const { createSecureHeaders } = require("next-secure-headers");
const nextConfig = {
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
  },
  images: {
    domains: ["i.imgur.com"]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...createSecureHeaders(),
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(
  nextConfig,
  sentryWebpackPluginOptions
)