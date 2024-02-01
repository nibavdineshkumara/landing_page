/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nibavlifts.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
