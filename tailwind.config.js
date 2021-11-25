module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow'],
        barlowC: ['Barlow Condensed'],
        bellefair: ['Bellefair'],
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '19': '4.75rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '42': '10.5rem',
        '68': '17rem',
        '110': '27.5rem'
      },
      colors: {
        dark: '#0B0D17',
        alt: '#D0D6F9',
      }
    }
    
  },
  variants: {
  },
  plugins: [],
}
