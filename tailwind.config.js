/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Scan all files in `src` folder
    "./index.js", // Scan `index.js` at the root level
],
  theme: {
    extend: {},
  },
  plugins: [],
}

