/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary)',
        dark: 'var(--dark)',
      },
      fontSize: {
        '2xl': [
          '3.500em',
          {
            lineHeight: '68px',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        xl: [
          '44px',
          {
            lineHeight: '60px',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        base: [
          '1em',
          {
            lineHeight: '28px',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
        lg: [
          '24px',
          {
            lineHeight: '28px',
            letterSpacing: '-0.01em',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
