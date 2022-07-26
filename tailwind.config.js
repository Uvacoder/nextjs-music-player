/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textFaded: "#ABABAB",
        textLight: "#FFFFFF",
        hover: "#313131",
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px;",
      },
    },
  },
  plugins: [],
};
