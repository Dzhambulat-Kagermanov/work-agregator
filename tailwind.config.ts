import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // BLACK
        blackBase: '#000',
        blackBase80: 'rgba(0,0,0,0.8)',
        // WHITE
        whiteBase: '#fff',
        // GREY
        greyBase: '#A19A9A',
        grey100: '#EBEBEB',
        grey100H: '#DCDCDC',
        // BLUE
        blueBase: '#0057FF',
        blueBaseH: '#003FB9',
        blueBaseA: '#004CE0',
        blue100: '#4972EC',
        // DARKBLUE
        darkBlueBase: '#1A1F2E',
        darkBlue100: '#2A303C',
        // RED
        redBase: '#EC1C24',
      },
      fontFamily: {
        drukWideCyr: ['DrukWideCyr', 'sans-serif'],
        plusJakarta: ['PlusJakartaSans', 'sans-serif'],
      },
      boxShadow: {},
    },
    screens: {},
  },
  plugins: [],
} satisfies Config
