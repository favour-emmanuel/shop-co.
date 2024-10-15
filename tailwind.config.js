/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        integral: ["IntegralCF", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        appBlack: "#0d0d0d",
        appGray: "#F2F0F1",
      },
    },
  },
  plugins: [],
};
