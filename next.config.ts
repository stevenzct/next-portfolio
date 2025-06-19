import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      enabled: false, // 👈 this disables Turbopack properly
    },
  },
};

export default nextConfig;
