/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  output: "export",

  basePath: "/100acress",

  assetPrefix: "/100acress/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;