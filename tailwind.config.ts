import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        paper: '#FBF8F1',
        charcoal: '#2C2C2A',
        forest: '#24473A',
        gold: '#B7934B',
        'soft-gold': '#D8C18A',
        stone: '#7A766D'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        elegant: '0 20px 50px rgba(44, 44, 42, 0.10)'
      }
    }
  },
  plugins: []
};

export default config;
