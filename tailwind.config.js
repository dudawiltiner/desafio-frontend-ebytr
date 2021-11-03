module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'red-color': '#CF786F',
        'yellow-color': '#F0BC68',
        'green-color': '#87D1A5',
        'blue-color': '#6E7E74',
        'brown-color': '#826C5F',
      },
      borderColor: {
        'red-color': '#CF786F',
        'yellow-color': '#F0BC68',
        'green-color': '#87D1A5',
        'blue-color': '#6E7E74',
        'brown-color': '#826C5F',
      },
      textColor: {
        'red-color': '#CF786F',
        'yellow-color': '#F0BC68',
        'green-color': '#87D1A5',
        'blue-color': '#6E7E74',
        'brown-color': '#826C5F',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
