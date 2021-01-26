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
        dark: "#242323",
      },
      height: (theme) => ({
        132: "33rem",
        156: "39rem",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(4px)",
    },
  },
  variants: {
    extend: {},
    filter: ["responsive"], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
  },
  plugins: [require("tailwindcss-filters")],
};
