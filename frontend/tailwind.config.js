/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#DDADFA',  // A primary color you use most frequently in your UI
        'secondary': '#87B3B8', // A secondary color that compliments your primary color
        'dark': '#0A2239',      // A darker color, perhaps for text or backgrounds
        'darker': '#132E32',    // An even darker color, for accents or contrasts
        'light-gray': '#CDD1C4', // A light gray color, for subtle UI elements or backgrounds
      },
    },
  },
  plugins: [],
}

