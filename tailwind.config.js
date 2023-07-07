/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        38: "38rem",
      },
      colors: {
        "primary-blue": "#2153f9",
        "blue-grey-80": "#5f6487",
        "blue-grey-40": "#8a8eab",
        "blue-grey-24": "#bcc3d6",
        "blue-grey-8": "#f2f4f9",
        "grey-color-100": "#333",
        "grey-color-40": "c4c4c4",
        "red-color-100": "#ff4949",
        "orange-color-100": "#ffa113",
        "green-color-100": "#8cd55f",
        "violet-color-100": "#9c0ce8",
      },
      screens: {
        sx: "0px",
      },
    },
  },
  plugins: [],
};
