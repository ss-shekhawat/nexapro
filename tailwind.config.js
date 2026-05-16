/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#2196F3',      // Sky Professional 
        // secondary: '#2B2D42',    // Dark navy
        // accent: '#8D99AE',       // Light gray-blue
        // light: '#EDF2F4',        // Off-white
        // dark: '#414141',         // Dark gray for text
        primary: "#1976D2",
        secondary: "#2B2D42",
        dark: "#1E1E1E",
        light: "#FFFFFF",
        accent: "#EDF2F4",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
