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
        // Light mode
        'bg-primary-light': colors.white,
        'bg-secondary-light': colors.white,
        'bg-tertiary-light': colors.neutral[50],
        'text-primary-light': colors.neutral[800],
        'text-secondary-light': colors.neutral[600],
        'text-tertiary-light': colors.neutral[500],
        'border-primary-light': colors.neutral[300],
        'border-secondary-light': colors.neutral[200],
        'accent-light': colors.sky[600],

        // Dark mode
        'bg-primary-dark': '#121212',
        'bg-secondary-dark': '#1a1a1a',
        'bg-tertiary-dark': '#1a1a1a',  
        'text-primary-dark': colors.neutral[100],
        'text-secondary-dark': colors.neutral[400],
        'text-tertiary-dark': colors.neutral[500],
        'border-primary-dark': colors.neutral[700],
        'border-secondary-dark': colors.neutral[800],
        'accent-dark': colors.sky[500],
      },
    },
  },
  plugins: [],
} 