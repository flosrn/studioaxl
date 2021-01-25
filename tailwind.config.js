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
        serif: ["Futura"],
        sans: ["Futura"],
        mono: ["Futura"],
        display: ["Futura"],
        body: ["Futura"],
        sage: ["Sage"],
        alegreya: ["Alegreya"],
      },
      colors: {
        gold: "#FCDBBD",
        rose: "#FFEBD8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
