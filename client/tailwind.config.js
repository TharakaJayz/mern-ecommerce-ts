/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color_131921: "#131921",
        color_3b4149: "#3b4149",
        color_febd69: "#febd69",
        color_232f3e: "#232f3e",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      spacing: {
        '1vw' :"10vw",
        '2vw' :"20vw",
      },
    },
  },
  plugins: [],
};
