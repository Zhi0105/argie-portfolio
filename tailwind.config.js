/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [],
}