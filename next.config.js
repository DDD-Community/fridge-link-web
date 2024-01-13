/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
};

module.exports = nextConfig;
