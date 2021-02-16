module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: '#682DAA',
        yellow: '#FAB800',
        title: '#131825',
        turquoise: '#00B4AE',
        red: '#E60000',
        error: '#FF5757',
        salmon: '#FF9170',
        body: '#525876',
        placeholder: '#BDC1D4',
        label: '#8E95B8',
        green: '#94B63F',
        'light-blue': '#8DD7CA',
        blue: '#0070C1',
        line: '#E8EAF5',
        input: '#F7F7FB'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
