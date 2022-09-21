/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald'],
      },
      colors: {
        'neu-purple': '#CE79F2',
        'neu-green': '#05F26C',
        'neu-yellow': '#F2D335',
        'neu-orange': '#F2A341',
        'neu-red': '#F25C5C',
        'neu-yellow-light': '#FFF500',
        'neu-blue': '#39DBFF',
      },
      boxShadow: {
        neu: '4px 4px 0 0',
      },
    },
  },
  plugins: [],
};
