/** @type {import('next').NextConfig} */
const nextConfig = {


  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    // Increase chunk load timeout
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000
    };

    // Optimize chunks
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: "all",
        minSize: 20000,
        maxSize: 70000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: "vendor",
            chunks: "all",
            test: /node_modules/,
            priority: 20
          },
          // Common chunk
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    };

    return config;
  },
  // Add more generous timeouts
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
