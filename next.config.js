/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['secure.gravatar.com', '203.161.43.125','images.unsplash.com'],
  },
};

module.exports = nextConfig;
