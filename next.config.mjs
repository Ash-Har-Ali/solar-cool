/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
