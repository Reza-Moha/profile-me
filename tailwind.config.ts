import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans],
        doran: ["var(--font-doran)", ...fontFamily.sans],
        kalameh: ["var(--font-kalame)", ...fontFamily.sans],
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-right": "move-right 1s linear infinite",
        "move-left": "move-left 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(50%)",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
export default config;
