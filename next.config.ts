import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://blogsofraghs.wordpress.com/wp-content/uploads/2008/11/surya.jpg"
      ),
    ],
  },
};

export default nextConfig;
