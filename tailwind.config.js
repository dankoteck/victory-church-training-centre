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
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          500: "#6B7280",
          800: "#1F2A37",
          900: "#111928",
        },
      },
    },
  },
  plugins: [],
};
