/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Allows remote images
    unoptimized: true, // Allows local images from /public/
  },
};

export default nextConfig;
