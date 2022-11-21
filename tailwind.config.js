/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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