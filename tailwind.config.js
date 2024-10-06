/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#58C4DC",
        dark: {
          // "gradient-diagonal-tl-br":
          //   " to from-[#CEDEFF] via-[#79B4F8] via-[#DBF7FF] to-[ #B7B4FF ]",
          text: "black",
          dark: "rgba(0,0,0,.8)",
          soft: "rgba(255,255,255,.6)",
          back: "#E6F2FF",
          light: "#F0F7FF",
          button: "black",
        },
        text: {
          dark: "black",
          soft: "white",
        },
      },
      fontFamily: {
        inter: ["'Poppins'", "sans-serif"],
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
