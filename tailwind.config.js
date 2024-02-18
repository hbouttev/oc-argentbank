/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#2c3e50',
        'secondary': '#222222',
        'dark': '#12002b',
      },
    },
  },
  plugins: [],
};
