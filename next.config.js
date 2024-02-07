const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // react-pdf needs this: https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file#nextjs
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  output: "export",
};

module.exports = withMDX(nextConfig);
