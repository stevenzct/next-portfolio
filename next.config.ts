import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.stevencabugos.me" }],
        destination: "https://stevencabugos.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
