/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#264065",
        primaryDark:"#30486D",
        secondary:"#2CAAC1",
        secondaryDark:"#7CC5D2",
        paragraph:"#717886",
        sectionBgDark:"#E1F2FA",
        sectionBg:"#F8FCFF"

      }
    },
  },
  plugins: [],
};
