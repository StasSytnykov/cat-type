import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        pulsing: {
          "100%": { opacity: "1" },
          "85%": { opacity: "0.85" },
          "60%": { opacity: "0.6" },
          "45%": { opacity: "0.45" },
          "30%": { opacity: "0.3" },
          "15%": { opacity: "0.15" },
          "0%": { opacity: "0" },
        },
      },
      animation: {
        "typing-pulse": "pulsing 1s linear infinite 0.7s",
      },
    },
  },
  plugins: [],
};
export default config;
