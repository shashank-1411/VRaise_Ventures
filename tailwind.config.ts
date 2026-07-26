import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBrand: "#83c8f2",
        magentaBrand: "#82185d",
        outlineDark: "#1a0513",
        bgPrimary: "#f2f7fa",
        bgSecondary: "#ffffff",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
