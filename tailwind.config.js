/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        title: ["Exo", "sans-serif"],
      },
      colors: {
        primary: "#5567ff",
        navbar: "#303956",
        bgColor: "#f5f7fa",
        grey: "#868e96",
      },
    },
  },
  plugins: [],
};
