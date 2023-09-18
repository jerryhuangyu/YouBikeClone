/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-dark": "#687411",
        "green": "#B5CC23"
      }
    },
  },
  plugins: [],
}

