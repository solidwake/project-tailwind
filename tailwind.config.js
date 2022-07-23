const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    content: [
        './public/index.html',
        './public/**/*.{html,js}'
    ],
    plugins: [
        plugin(function ({addUtilities, addVariant}) {
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