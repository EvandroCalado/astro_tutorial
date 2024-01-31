/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primry: "#ff2e63",
        secondary: "#080906",
        dark: "#252a34",
        light: "#eaeaea",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "sans-serif"],
    },
  },
  plugins: [],
};
