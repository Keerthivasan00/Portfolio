/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '93.5': '93.222%',
        '90': '90.777%',
        '25':'52.455rem',
        '26':'36.677rem',
        '20.1':'20.677rem',
        '98':'23.666rem',
        '99':'25rem'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-out-down': 'fadeOutDown 0.5s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.5s ease-out forwards',
        'fade-out-right': 'fadeOutRight 0.5s ease-out forwards',
      },
      keyframes: {
        "fade-in": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
        },
        "fade-out": {
            "0%": {
                opacity: 1
            },
            "100%": {
                opacity: 0
            },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(24px)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(24px)' },
        },
      },
    },
  },
  plugins: [],
}

