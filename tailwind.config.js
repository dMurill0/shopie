/** @type {import('tailwindcss').Config} */
module.exports = {
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
        secondary: "#f13223"
      },
      backgroundImage: {
        'heroBg': "url('/public/images/bg.jpg')",
        'meshBg': "url('/public/images/bgMesh.png')"
      }
    },
  },
  plugins: [],
}