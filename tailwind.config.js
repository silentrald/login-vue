/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#333",
        green: "#3cb043",
        red: "#ff0033",

        light: {
          green: "#3ded97",
        },

        dark: {
          green: "#234f1e",
        },
      },
      fontFamily: {
        primary: ["basis33", "sans-serif"],
      },
    },
  },
  plugins: [],
};
