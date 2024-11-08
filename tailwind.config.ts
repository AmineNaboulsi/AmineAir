import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maincolor : "var(--primarycolor)",
        secondcolor : "var(--secondcolor)",
        coldbluecolor : "var(--coldbluecolor)",
        bggraycolor : "var(--bggraycolor)"
      }
    },
  },
  plugins: [],
};
export default config;
