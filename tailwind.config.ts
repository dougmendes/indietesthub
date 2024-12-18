import type { Config } from "tailwindcss";

export default {
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
        purpleNeon: "#8A2BE2", 
        pinkNeon: "#FF00FF",   
        cyanNeon: "#00CED1",   
        blueNeon: "#1E3A8A",   
        darkBlueNeon: "#0F172A", 
      },
      boxShadow: {
        neon: "0 0 10px 3px rgba(255, 0, 255, 0.8), 0 0 15px 6px rgba(0, 206, 209, 0.8)",
      },
      backgroundImage: {
        "gradient-cyberpunk": "linear-gradient(90deg, #8A2BE2, #FF00FF, #00CED1, #1E3A8A, #0F172A)",
      },
    },
  },
  plugins: [],
} satisfies Config;
