/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: true,
    extend: {
      fontFamily: {
        serif: "EB Garamond",
      },
    },
  },
  plugins: [],
}
