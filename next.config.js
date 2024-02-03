const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = withMDX(nextConfig);
