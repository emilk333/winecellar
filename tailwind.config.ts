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
        'paper': '#F5F4F1',
        'piss-yellow': '#F2DE69',
        'off-red': '#B11B1B',
        'port': '#F48A47',
        'orange': '#F99340',
        'off-yellow': '#FFEA80',
        'rosé': 'FF8086'
      },
      fontFamily: {
        'old-london': ['var(--font-old-london)'],
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-rubik)']
      }
    },
  },
  plugins: [],
} satisfies Config;
