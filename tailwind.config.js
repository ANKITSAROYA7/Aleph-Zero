/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      animation:{
        'spin-slow': 'wiggle 30s linear infinite',
      },
      keyframes:{
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-228px * 5))' },
        }
      }
    },
  },
  plugins: [],
};
