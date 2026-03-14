/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0f2cbd',
        dark: '#0a0a0a',
        surface: '#121212',
      },
      borderRadius: {
        'custom': '8px',
      }
    }
  },
  plugins: [],
}