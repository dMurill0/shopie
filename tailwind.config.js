/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#f4f4ec",
        secondary: "#e1686a"
      },
      backgroundImage: {
        'heroBg': "url('/public/images/bg.jpg')",
        'meshBg': "url('/public/images/bgMesh.png')",
        'darkMesh': "url('/public/images/darkMesh.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'), ({ nocompatible: true }),
  ],
}