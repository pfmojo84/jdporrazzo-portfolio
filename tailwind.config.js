/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#1CA3EC',
        coral: '#FF6F61',
        sunset: '#FFAB76',
        sand: '#FFD700',
        kelp: '#008080',
        service: '#bc4749',
        tech: '#f2e8cf',
      },
      fontFamily: {
        funky: ['"Chewy"', 'cursive', 'sans-serif'],
        captain: ['"Amatic SC"', 'fantasy'],
        fun: ['"Poppins"', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};