/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontWeight:{
 '400':400,
        '100':100,
    },   
    },
fontStyle:{
        'italic':'italic',
      'fontstylish':'Verdana, Geneva, Tahoma, sans-serif'
      },
  },
  plugins: [],
}

