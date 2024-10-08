/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors(theme) {
        return {
          orange: '#FFA800',
          goldenOrange: '#FFCA62',
          white: '#ffffff',
          darkGrey: '#2D2B2F',
          lightGrey: '#928F94',
        }
      },
      backgroundImage: {
        'train-main': "url('../../tickets-booking/img/train_main.png')",
        'road-main': "url('../../tickets-booking/img/road_main.png')"
      },
    },
  },
  plugins: [],
}

