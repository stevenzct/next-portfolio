import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    const headers = [{ key: "X-Robots-Tag", value: "noindex" }];

    return [
      {
        source: "/images/projects/PaysoRemittance1.png",
        headers,
      },
      {
        source: "/_next/image",
        has: [
          {
            type: "query" as const,
            key: "url",
            value: "/images/projects/PaysoRemittance1\\.png",
          },
        ],
        headers,
      },
    ];
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
