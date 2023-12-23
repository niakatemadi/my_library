/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        night : {
          DEFAULT : "#0D1120",
          50 : "#171E2C",
          500 : "#0D1120",
        }
      },
      keyframes : {
        "wiggle" : {
          "0%" : {transform : "rotate(-3deg)"},
          "50%" : {transform : "rotate(3deg)"},
          "100%" : {transform : "rotate(-3deg)"}
        },
        "float" : {
          "0%" : {transform : "translateY(0)"},
          "50%" : {transform : "translateY(-10px)"},
          "100%" : {transform : "translateY(0)"},
        },
        "fade-in" : {
          "0%" : {opacity : "0"},
          "100%" : {opacity : '1'}
        }
      },
      animation : {
        wiggle : "wiggle 2s infinite",
        float : "float 3s ease-in-out infinite",
        fadeIn : "fade-in 1s ease-in-out"
      }
    },
  },
  plugins: [],
};