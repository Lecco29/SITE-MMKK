tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ['Poppins', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: {
          // Laranja MMKK - Paleta Unificada
          50: '#FFFAF5',
          100: '#FEF7F0',
          200: '#FDF3EA',
          300: '#F5A855',
          400: '#E07B24',
          500: '#E07B24',
          600: '#C96A1A',
          700: '#A85815',
          800: '#874610',
          900: '#66350C',
          // Aliases
          primary: '#E07B24',
          'primary-dark': '#C96A1A',
          'primary-light': '#F5A855',
          // Neutros
          'text-primary': '#1A1A1A',
          'text-secondary': '#525252',
          'text-muted': '#737373',
          'border': '#E5E5E5',
          'bg-dark': '#1F1F1F'
        }
      }
    }
  }
};
