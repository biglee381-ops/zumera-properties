module.exports = {
  content: ['./index.html', './*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7fb',
          100: '#e6eef8',
          200: '#cbe0f2',
          300: '#9ecaf0',
          400: '#5aa7e6',
          500: '#2b7bd1',
          600: '#1f559f',
          700: '#153b73',
          800: '#0e2a4a',
          900: '#071623'
        }
      },
      fontFamily: {
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: [],
}
