/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple1: "#8e44ad",
        purple2: "#a569bd",
        purple3: "#6c3483",
      },
    },
  },
  plugins: [],
};
