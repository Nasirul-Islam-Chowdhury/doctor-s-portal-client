/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme:{
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          neutral: '#3A4256',
          accent: "#37cdbe",
          "base-100": "#ffffff",

          
        }
      }
    ],
    
  },
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('./src/assets/images/bg.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

