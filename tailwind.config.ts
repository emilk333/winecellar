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
        'gradient-off-red': 'linear-gradient(100deg, #B11B1B 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-piss-yellow': 'linear-gradient(100deg, #f7e683ff 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-yellow-green-tint': 'linear-gradient(100deg,rgba(238, 235, 181, 1) 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-port': 'linear-gradient(100deg, rgb(102, 30, 15) 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-orange': 'linear-gradient(100deg, #F99340 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-off-yellow': 'linear-gradient(100deg, #FFEA80 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-rosé': 'linear-gradient(100deg, #FF8086 100%, rgba(87, 199, 133, 0) 90%)',
        'gradient-paper': 'linear-gradient(100deg, rgba(228, 225, 217, 1) 100%, rgba(87, 199, 133, 0) 90%)',
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
        'gray': {
          400: 'rgba(15, 15, 0, 0.12)'
        },
        'paper': {
          100: 'rgba(253, 253, 252, 1)',
          400: '#F5F4F1',
          600: '#EFEDE6',
          700: 'rgba(100, 100, 98, 1)',
          800: 'rgba(228, 225, 217, 1)',
          900: '#8d7f5a'
        },
        'yellow-green-tint': {
          400: 'rgba(238, 235, 181, 1)',
          800: 'rgb(142, 141, 40)'
        },
        'piss-yellow': {
          400: '#f7e683ff',
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
          800: 'rgba(110, 76, 31, 1)'
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
        body: ['var(--font-aleo)'],
      }
    },
  },
  plugins: [],
} satisfies Config;
