/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will include all JS/JSX/TS/TSX files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Add Montserrat as a font family option
      },
    },
  },
  plugins: [],
}

