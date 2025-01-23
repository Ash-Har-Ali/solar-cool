module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Scan all files in the 'pages' directory
    './components/**/*.{js,ts,jsx,tsx}', // Scan all files in the 'components' directory
    './app/**/*.{js,ts,jsx,tsx}', // If using the `app` directory
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
