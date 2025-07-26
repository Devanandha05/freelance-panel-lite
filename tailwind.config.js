/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2f243a',
        primaryH: '#1f1629',
        secondary: '#f9ddbd',
        accent: '#db8a74',
        accentH: '#c37964',
        background: '#db8a74',
        card: '#f8beaa',
        cardblue:'#d7bff3',
        cardpink:'#f1b6a6',
        muted: '#6a707c',
        success: '#D8F3DC',
        warning:'#f7e9c4',
        primaryD:'#e4dbe9',
        primaryHD:'#c2b2d6',
        secondarD:'#3a2f2f',
        accentD:'#f6b8a6',
        accentHD:'#f0a08e',
        backgroundD:'#1a1a1a',
        cardD:'#2e2e3f',
        cardblueD:'#3e2c5f',
        cardpinkD:'#3a2a2f',
        mutedD:'#a5a5a5',
        successD:'#1f4638',
        darkcard: '#1e1e2f',
        mutedlight: '#b0b0c3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

