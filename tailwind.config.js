/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    theme: {
      extend: {
        zIndex: {
          n1: '-1',
          99: '99',
          999: '999',
          9999: '9999',
        },
        fontFamily: {
          poppins: ["'Poppins', sans-serif"],
        },
        colors: {
          primaryLight: '#bdd7d6',
          primary: '#7f9d9d',
          primaryDark: '#526265',
          secondary: '#eff2dd',
          warning: '#c25251',
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '16px',
            sm: '16px',
            lg: '16px',
            xl: '16px',
            '2xl': '16px',
          },
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}
