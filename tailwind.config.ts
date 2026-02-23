import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose:        '#C4687A',
        'rose-deep': '#A84E62',
        blush:       '#F2D7D9',
        'blush-light': '#FDF0F2',
        mauve:       '#C9919E',
        lavender:    '#E8D5E8',
        cream:       '#FDF6F0',
        'warm-white': '#FEFAF8',
        'text-dark':  '#3D2A2E',
        'text-mid':   '#6B4550',
      },
      fontFamily: {
        display:  ['Dancing Script', 'cursive'],
        serif:    ['Cormorant Garamond', 'serif'],
        body:     ['Crimson Text', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'bg-shift':    'bgShift 14s ease infinite',
        'float-up':    'floatUp 6s ease-in-out infinite',
        'rose-float':  'roseFloat 3s ease-in-out infinite',
        'pulse-soft':  'pulseSoft 2s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        bgShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        floatUp: {
          '0%':   { transform: 'translateY(0px)', opacity: '0.6' },
          '50%':  { transform: 'translateY(-20px)', opacity: '1' },
          '100%': { transform: 'translateY(0px)', opacity: '0.6' },
        },
        roseFloat: {
          '0%,100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%':     { transform: 'translateY(-10px) rotate(3deg)' },
        },
        pulseSoft: {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%':     { transform: 'scale(1.05)', opacity: '0.85' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glass: '0 8px 40px rgba(196,104,122,0.13), 0 2px 12px rgba(196,104,122,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        rose:  '0 6px 28px rgba(196,104,122,0.38), 0 2px 8px rgba(196,104,122,0.2)',
        'rose-lg': '0 12px 40px rgba(196,104,122,0.5)',
        card:  '0 4px 24px rgba(196,104,122,0.18), inset 0 1px 0 rgba(255,255,255,0.7)',
      },
    },
  },
  plugins: [],
};

export default config;
