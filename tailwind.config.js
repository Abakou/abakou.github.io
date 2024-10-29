/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend:{
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'], // Ajoutez Bebas Neue à votre configuration
        manrope: ['Manrope', 'sans-serif'],
        playwrite: ['Playwrite GB S','cursive'],
        rowdies:["Rowdies", 'sans-serif']
      },
      colors:{
        //abk:"#001b48"
        abk:"#0A0A0A",
        redfr:"#ce1126",
        bluefr:"#002654"
      }
    }
  },
  plugins: [],
}

