/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': 'rgba(255, 255, 255, 1) rgba(227, 242, 246, 1)',
        'bg-2':'rgba(125, 74, 234, 0.2)'
      },
      fontFamily: {
        'poppins': ['Poppins' ,'sans-serif'],/* 
        'inter':['Inter'] */
     }
    },
  },
  plugins: [],
}
