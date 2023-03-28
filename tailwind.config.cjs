/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'playlist-script': ['Playlist Script', 'sans-serif']
    },
      fontSize: {
        '10xl': '12rem',
      }
  },
  },
  plugins: [],
}
