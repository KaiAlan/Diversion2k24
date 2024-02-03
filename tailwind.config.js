/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      height: {
        '374': '374px'
      },

      backgroundColor: {
        'custom': 'rgba(138, 162, 169, 0.23)',
      },

      boxShadow: {
        'custom': '6px 6px 14.5px 0px rgba(0, 0, 0, 0.35)',
        'custom-grad': '#74F2CE'
      },

      colors: {
        'custom-green': '#379634', // Added custom color
        'custom-text-green': '#507D2A',
        'custom-text-color': 'rgba(55, 150, 52, 0.19)'

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Added custom font
      },
      fontSize: {
        custom: '60px', // Added custom font size
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
