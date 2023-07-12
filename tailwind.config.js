/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    screens: {
      medium: '500px',
      // => @media (min-width: 640px) { ... }

      large: '1024px',
      // => @media (min-width: 1024px) { ... }

      xlarge: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xlarge': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
