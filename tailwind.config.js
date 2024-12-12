/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend:[]
  },
  daisyui: {
    themes: [
      "lemonade",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}