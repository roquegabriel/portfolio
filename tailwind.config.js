/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway:['raleway']
      },
      colors : {
        midnight : '#0a192f',
        fog: '#ccd6f6',
        lightslategray:'#8892b0'
      },
    },
  },
  plugins: [],
}

