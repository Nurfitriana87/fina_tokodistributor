/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#CC3F3F",
      linerGradient1: "#E0062E",
      linerGradient2: "#CF1863",
      white: "#FFFFFF",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
