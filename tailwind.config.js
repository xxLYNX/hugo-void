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
        'bg-bg-primary-light': colors.white,
        'bg-bg-secondary-light': colors.white,
        'bg-bg-tertiary-light': colors.neutral[50],
        'text-text-primary-light': colors.neutral[800],
        'text-text-secondary-light': colors.neutral[600],
        'border-border-primary-light': colors.neutral[300],
        'border-border-secondary-light': colors.neutral[200],
        'accent-light': colors.sky[600],

        // Dark mode
        'bg-bg-primary-dark': '#121212',
        'bg-bg-secondary-dark': '#1a1a1a',
        'bg-bg-tertiary-dark': '#1a1a1a',  
        'text-text-primary-dark': colors.neutral[100],
        'text-text-secondary-dark': colors.neutral[400],
        'border-border-primary-dark': colors.neutral[700],
        'border-border-secondary-dark': colors.neutral[800],
        'accent-dark': colors.sky[500],
      },
    },
  },
  plugins: [],
} 