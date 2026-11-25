import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (written to ./out) for GitHub Pages.
  output: "export",
  images: {
    // The default image optimizer needs a server, which a static export doesn't have.
    unoptimized: true,
  },
};

export default nextConfig;
