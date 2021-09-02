module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        pacifico: ['"Pacifico"', "cursive"],
        openSans: ['"Open Sans"', "sans-serif"],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
