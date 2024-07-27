/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#14251D',
        'secondary': '#96E6A1',
        'tertiary': '#209D62'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, rgba(150,230,161,1) 50%, rgba(212,252,121,1) 100%)'
      },
      fontFamily: {
        'bungee': ['Bungee', 'sans-serif'],
        'sora': ['Sora', 'sans-serif']
      },
      boxShadow: {
        'button': 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
        'custom': '0px 4px 24px 0px #14251D80 inset'
      }
    },
  },
  plugins: [],
}
