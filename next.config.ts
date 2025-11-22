// Types
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization if needed
  },
  output: 'export'
};

export default nextConfig;