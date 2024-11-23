/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{},
      fontFamily:{
        afacad :["Afacad Flux", 'sans-serif'],
        Poppins : ["Poppins", 'sans-serif'],
        Roboto : ["Roboto",'sans-serif'],
      },
    },

  },
  plugins: [
    
  ],
}

