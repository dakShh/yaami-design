/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1025px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#A5C9CA",
        secondary: "#395B64",
        accent: {
          primary: "#E7F6F2",
          secondary: "#2C3333",
        },
      },
    },
  },
  plugins: [],
};
