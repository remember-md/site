import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Remotion uses dynamic imports that need this
  transpilePackages: ["remotion", "@remotion/player"],
};

export default nextConfig;
