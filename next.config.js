/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mara-s3bucket.s3.ap-northeast-2.amazonaws.com'],
  },
  distDir: 'build',
  webpack: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...(config.module.rules || []),
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ],
      },
    };
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
