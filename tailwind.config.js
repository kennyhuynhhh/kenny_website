/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        metal: {
          light: '#f5f6fa', // very light grey
          DEFAULT: '#d1d5db', // neutral metallic
          medium: '#a3a7ad', // medium metallic
          dark: '#484b52', // dark metallic
          gunmetal: '#23272f', // almost black
        },
      },
    },
  },
  plugins: [],
};
