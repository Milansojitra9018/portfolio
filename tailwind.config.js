import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2sm": "350px",
      "3sm": "450px",
      ...defaultTheme.screens,
    },
    colors: {
      primary: "#7f7f7f",
      secondary: "#667eea",
      secondaryhover: "#667eea",
      textgray: "#1a202c",
      dark: {
        primary: "#1a1a1a",
        secondary: "#5c5a5a",
        secondaryhover: "#5968e5",
        textgray: "#ffffff",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      userSelect: {
        none: "none",
        "webkit-none": "-webkit-user-select: none",
        "moz-none": "-moz-user-select: none",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "::selection": {
          color: "#000000",
          background: "#fff",
        },
      });
    },
  ],
};

export default config;
