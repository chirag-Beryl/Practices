/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        moveup: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
      animation: {
        'move-Up': 'moveup 10s ease-in-out ',
      },
    },
  },
  plugins: [],
};
