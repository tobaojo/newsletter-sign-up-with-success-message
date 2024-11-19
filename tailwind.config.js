/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Matches all HTML files in the root directory
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        darkSlateGrey: "hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        tomato: "hsl(4, 100%, 67%)",
      },
    },
  },
  plugins: [],
};
