import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#3B82F6",
        secondaryhover: "#2563EB",
        textgray: "#2D3748",
        dark: {
          primary: "#1A202C",
          secondary: "#2D3748",
          secondaryhover: "#2563EB",
          textgray: "#E2E8F0",
        },
        decoration: {
          primary: "#FF6F61",
          secondary: "#FBBF24",
          primaryDark: "#FF7F50",
          secondaryDark: "#FDBA74",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #667eea, #764ba2)",
      },
    },
  },
};

export default config;
