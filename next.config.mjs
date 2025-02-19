const nextConfig = {
  output: "standalone",
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
