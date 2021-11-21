module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "red-ryb": "#FF331F",
        "dim-gray": "#6d6a75",
        "black-coffee": "#37323e",
        "black-coffee-dark": "#141217",
        "gold-metallic": "#deb841",
        "fancy-purple": "#251351",
        "fancy-purple-hovered": "#3C1F84",
        "timberwolf": "#D8DAD3",
        "imperial-red": '#620410',
        "secondary-color": '#FB4D3D'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
