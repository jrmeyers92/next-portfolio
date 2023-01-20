/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        navyShadow: "rgba(2, 12, 27, 0.7)",
        slate: "#8892b0",
        darkSlate: "#495670",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        greenTint: "rgba(100, 255, 218, 0.1)",
        pink: "#f57dff",
        blue: "#57cbff",
      },
    },
  },
  plugins: [],
};
