/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Components directory
    './app/**/*.{js,ts,jsx,tsx}', // App directory (if used)
  ],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      solarcoolgreen: '#048c46',
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
