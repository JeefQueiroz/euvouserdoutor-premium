/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#071426',
        paper: '#F6F8FB',
        bone: '#FFFFFF',
        clinic: '#1D4F8F',
        grape: '#345B55',
        aqua: '#6BAFB2',
      },
      boxShadow: {
        ambient: '0 18px 50px rgba(7,20,38,0.08)',
        softblue: '0 12px 28px rgba(29,79,143,0.14)',
      },
      transitionTimingFunction: {
        mass: 'cubic-bezier(0.32,0.72,0,1)',
      },
    },
  },
  plugins: [],
};
