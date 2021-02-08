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
        pink: "#FDE0E0",
        dark: "#242323",
      },
      width: {
        128: "32rem",
        "cookie-max": "28.125rem",
      },
      height: (theme) => ({
        132: "33rem",
        156: "39rem",
        line: "2px",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      boxShadow: {
        header: "0px 10px 50px rgba(0, 0, 0, 0.03)",
        card: "0px 5px 20px rgba(0, 0, 0, 0.05)",
        cookie: "0px 0px 10px rgba(0, 0, 0, 0.08)",
      },
      zIndex: {
        negative: -1,
      },
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
