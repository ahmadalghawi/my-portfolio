/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
    colors: {
      ...colors,
      primary: {
        DEFAULT: '#043c68',
        transpartnt: 'rgba(4, 60, 104, 0.4)',
      },
      secondary: {
        DEFAULT: '#05528e',
      },
      bgLight: {
        DEFAULT: '#e8f5fd',
      },
      bgLogo: {
        DEFAULT: '#156291',
      },
      tertiary: colors.sky,
      Twhite:colors.white
    },
  },
  plugins: [],
}
