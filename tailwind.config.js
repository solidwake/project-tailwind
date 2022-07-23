const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    content: [
        './public/index.html',
        './public/**/*.{html,js}'
    ],
    plugins: [
        plugin(function ({addUtilities, addVariant, addComponents}) {
            const newUtilities = {
                '.scale-1': {
                    transform: 'scale(1)'
                },
                '.rotate-1': {
                    transform: 'rotate(1)'
                }
            }
            addUtilities(newUtilities)
            addVariant('hocus', ['&:hover', '&:focus'])
            addComponents({
                '.btn-six': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600'
                },
                '.btn-true': {
                    backgroundColor: '#3490dc',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#0096FF'
                    }
                }
            })
        })
    ],
    theme: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        }
    }
}