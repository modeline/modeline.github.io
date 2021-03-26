module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#ffd166",
          DEFAULT: "#b39247",
          dark: "#665429",
        },
        secondary: {
          light: "#a1d5fc",
          DEFAULT: "#78c3fb",
          dark: "#5489b0",
        },
        neutral: {
          light: "#90968d",
          DEFAULT: "#60695c",
          dark: "#434a40",
        },
        danger: {
          light: "#ff9492",
          DEFAULT: "#ff6663",
          dark: "#b34745",
        },
        success: {
          light: "#458723",
          DEFAULT: "#63c132",
          dark: "#458723",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
