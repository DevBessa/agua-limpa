/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F6F4EB',
        secondary: '#91C8E4',
        accent: '#749BC2',
        highlight: '#4682A9',
        textLight: '#FFFFFF',
        bgDark: 'rgba(70, 130, 169, 0.8)',
        bgDarker: 'rgba(70, 130, 169, 0.9)',
      },
      fontSize: {
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      minHeight: {
        'screen-75': '75vh',
      },
    },
  },
  plugins: [],
}
