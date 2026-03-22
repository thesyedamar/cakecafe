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
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E5C992",
          dark: "#A88B4A",
        },
        charcoal: {
          DEFAULT: "#141414",
          light: "#1E1E1E",
          lighter: "#2A2520",
        },
        cream: "#F5F0EB",
        "warm-gray": "#A89F95",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
        cormorant: ['"Cormorant Garamond"', "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96E, #E5C992)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #141414 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
