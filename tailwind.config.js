const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Sage"],
        sans: ["Sage"],
        mono: ["Sage"],
        display: ["Sage"],
        body: ["Sage"],
      },
      colors: {
        gold: "#FCDBBD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
