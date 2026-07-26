import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf7ee",
        mustard: "#eec643",
        navy: "#0d21a1",
        blue: "#0e59c3",
        dark: "#121212",
      },
      fontFamily: {
        display: ["var(--display-font)"],
        body: ["var(--body-font)"],
      },
    },
  },
  plugins: [],
};

export default config;
