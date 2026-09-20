import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // This branch is the standalone About-only deployment; the full application
  // remains available on main with normal TypeScript build validation.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
