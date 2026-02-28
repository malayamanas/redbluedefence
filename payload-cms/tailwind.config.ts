import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7c43ff',
          light: '#a855f7',
          dark: '#5c2fe0',
        },
        bg: {
          DEFAULT: '#0a0a0f',
          surface: 'rgba(255,255,255,0.05)',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        heading: ['Rethink Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7c43ff, #a855f7)',
      },
      boxShadow: {
        brand: '0 0 40px rgba(124, 67, 255, 0.15)',
        'brand-lg': '0 0 80px rgba(124, 67, 255, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
