/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dubu-server.heyhey.i234.me", "localhost"],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_FETCH_URL: process.env.BASE_FETCH_URL,
    BASE_SERVER_URL: process.env.BASE_SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://dubu-server.heyhey.i234.me/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
