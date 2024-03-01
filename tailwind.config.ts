import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'kodemono': ['Kode Mono']
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        customBlueGray_1: '#1f2933',
        customBlueGray_2: '#192229',
        customBlackBackground: '#131313',
        customGreen: '#00AC7C',
        customGreenDark: '#008D67',
        customBoxBack: '#191919',
        customSand: '#BDBDBD',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),
            require('@tailwindcss/typography'),],
  
};
export default config;
