import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // the CV PDF route reads the portrait from disk when it regenerates
  outputFileTracingIncludes: {
    "/Lahiru-Asiri-CV.pdf": ["./public/portrait.jpg"],
  },
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;
