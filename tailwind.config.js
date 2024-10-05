/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { purple1: "#6A1B9A", purple2: "#AA00FF", black: "#212121" },
    },
  },
  plugins: [],
};
