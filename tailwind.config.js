/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          light: colors.neutral[800],
          dark: colors.neutral[100],
        },
        secondary: {
          light: colors.neutral[600],
          dark: '#B6BCBF',
        },
        tertiary: {
          light: colors.neutral[500],
          dark: colors.neutral[500],
        },
        accent: {
          light: colors.sky[600],
          dark: colors.sky[500],
        },
      },
      backgroundColor: {
        'primary-light': colors.white,
        'secondary-light': colors.white,
        'tertiary-light': colors.neutral[50],
        'primary-dark': '#000000',
        'secondary-dark': '#1a1a1a',
        'tertiary-dark': '#1a1a1a',
      },
      borderColor: {
        'primary-light': colors.neutral[300],
        'secondary-light': colors.neutral[200],
        'primary-dark': colors.neutral[700],
        'secondary-dark': colors.neutral[800],
      },
    },
  },
  plugins: [],
} 