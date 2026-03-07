/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
<<<<<<< HEAD
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
=======
      padding: '1.5rem',
      screens: {
>>>>>>> b4864b745af08b49b6f50518f519045be4559c14
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900
        secondary: "#1e293b", // Slate 800
        accent: "#10b981", // Emerald 500
        highlight: "#38bdf8", // Cyan 400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

