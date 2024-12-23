import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['pages', 'utils'],
  },
};

export default nextConfig;
