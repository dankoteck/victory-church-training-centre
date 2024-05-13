import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Mouse Memoirs"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#EBF5FF",
          200: "#C3DDFD",
          600: "#1C64F2",
          700: "#1A56DB",
        },
        gray: {
          800: "#1F2A37",
        },
      },
    },
  },
  plugins: [],
};
