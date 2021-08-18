module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
				baseColor1: 'var(--base-color-1)',
				baseColor2: 'var(--base-color-2)',
				baseColor3: 'var(--base-color-3)',
				baseColor4: 'var(--base-color-4)',
				baseColor5: 'var(--base-color-5)',
				baseColor6: 'var(--base-color-6)',
				secondaryColor1: 'var(--secondary-color-1)',
				secondaryColor2: 'var(--secondary-color-2)',
				secondaryColor3: 'var(--secondary-color-3)',
				primaryColor1: 'var(--primary-color-1)',
				primaryColor2: 'var(--primary-color-2)',
				tertiaryColor1: 'var(--tertiary-color-1)',
				tertiaryColor2: 'var(--tertiary-color-2)',
				warningColor: 'var(--warning-color)',
				accentColor: 'var(--accent-color-1)',
				bgGradient1: 'var(--background-gradient-1)',
				bgGradient2: 'var(--background-gradient-2)',
				bgGradient3: 'var(--background-gradient-3)',
			},
    },
  },
  plugins: [],
}
