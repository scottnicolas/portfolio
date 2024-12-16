/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // Body font
      "dm-sans-serif": ["DM Sans, sans-serif"],
      // Heading font
      "dm-serif": ["DM Serif Display, serif"],
    },
    extend: {},
  },
  plugins: [],
};
