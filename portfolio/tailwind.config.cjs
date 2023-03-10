/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      back: "#F9F3D3",
      black: "#000000",
      white: "#FFFCEC",
      yellow: "#FFE86D",
      gray: "#D9D9D9",
      green: "#33FFA9",
      transparent: "transparent",
    },
    extend: {
      dropShadow: {
        "4xl": "12 20px 20px gray",
      },
      boxShadow: {
        "4xl": "-24px 28px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
