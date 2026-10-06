module.exports = {
  content: ['./index.html', './*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8edf8',
          100: '#d1daf0',
          200: '#a8b9e2',
          300: '#7e98d4',
          400: '#4f6ec5',
          500: '#1034a6',
          600: '#0e2f96',
          700: '#0b277e',
          800: '#0a1d4e',
          900: '#08183f'
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
