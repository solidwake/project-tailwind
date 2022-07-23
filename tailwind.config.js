module.exports = {
    mode: 'jit',
    content: [
        './public/index.html',
        './public/**/*.{html,js}'
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