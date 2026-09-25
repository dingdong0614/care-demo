import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 허용 quality 목록. 여기 없는 값을 쓰면 프로덕션에서 400.
    qualities: [75, 80],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
