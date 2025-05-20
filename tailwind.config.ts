import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-off-red': 'linear-gradient(100deg, #B11B1B 58%, rgba(87, 199, 133, 0) 90%)',
        'gradient-piss-yellow': 'linear-gradient(100deg, #F2DE69 58%, rgba(87, 199, 133, 0) 90%)',
        'gradient-yellow-green-tint': 'linear-gradient(100deg,rgb(219, 242, 105) 58%, rgba(87, 199, 133, 0) 90%)',
        'gradient-port': 'linear-gradient(100deg, rgb(102, 30, 15) 58%, rgba(87, 199, 133, 0) 90%)',
        'gradient-orange': 'linear-gradient(100deg, #F99340 58%, rgba(87, 199, 133, 0) 90%)',
        'gradient-off-yellow': 'linear-gradient(100deg, #FFEA80 58%, rgba(87, 199, 133, 0) 90%)',
        'gradient-rosé': 'linear-gradient(100deg, #FF8086 58%, rgba(87, 199, 133, 0) 90%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'coal': {
          400: "#382b25"
        },
        'confirm-green': {
          400: 'rgb(72, 173, 77)',
          800: 'rgb(65, 163, 70)',
        },
        'paper': {
          400: '#F5F4F1',
          600: '#EFEDE6',
          800: '#E4E1D9'
        },
        'yellow-green-tint': {
          400: 'rgb(241, 241, 123)',
          800: 'rgb(142, 141, 40)'
        },
        'piss-yellow': {
          400: '#F2DE69',
          800: '#8A7B27'
        },
        'off-red': {
          100: '#F17D7D',
          400: '#B11B1B'
        },
        'port': {
          400: 'rgb(225, 56, 23)',
          800: 'rgb(102, 30, 15)'
        },
        'orange': {
          400: '#F99340',
          800: 'rgb(142, 98, 40)'
        },
        'off-yellow': {
          400: '#FFEA80',
          800: 'rgb(142, 98, 40)'
        },
        'rosé': {
          400: '#FF8086',
          800: 'rgb(142, 40, 71)'
        }
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
