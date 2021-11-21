module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        gray: {
          900: '#1F1D2B',
          800: '#252836',
          500: '#808191',
          400: '#B7B9D2',
        },
        orange: {
          DEFAULT: '#FF7551'
        }
      },
      fontSize: {
        xxs: '0.6875rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
