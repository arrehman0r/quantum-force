/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['secure.gravatar.com', '203.161.43.125','images.unsplash.com','blog.al-mizan.store'],
  },
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '203.161.43.125',
      port: '8000',
      pathname: '/wp-content/uploads/**',
    },
  ],
};

module.exports = nextConfig;
