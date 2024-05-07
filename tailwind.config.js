/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    },
    screens: {
      'tablet': '720px',
      'desktop': '920px',
    },
  },
  plugins: [],
}