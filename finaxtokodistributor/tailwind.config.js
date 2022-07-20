/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      red: "#CC3F3F",
      redHover: "#b03737",
      linerGradient1: "#E0062E",
      linerGradient2: "#CF1863",
      white: "#FFFFFF",
      black: "#262626",
      darkgrey: "#595959",
      lightgrey: "#737373",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
