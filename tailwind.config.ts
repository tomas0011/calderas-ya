import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2fa',
          100: '#cce5f5',
          200: '#99cbea',
          300: '#81C8EA',
          400: '#4da8de',
          500: '#0685CF',
          600: '#0569a8',
          700: '#044d81',
          800: '#03315a',
          900: '#021533',
        },
        accent: {
          50: '#fef3e6',
          100: '#fde7cc',
          200: '#fbcf99',
          300: '#fa772e',
          400: '#f95d12',
          500: '#d64d08',
          600: '#ad3d06',
          700: '#842d05',
          800: '#5b1e03',
          900: '#320f02',
        },
        highlight: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#FFD01D',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;