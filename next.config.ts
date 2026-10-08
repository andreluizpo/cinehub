import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://image.tmdb.org/t/p/**")],
    // unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.*"],
};

export default nextConfig;
