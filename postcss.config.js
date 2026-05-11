const purgecssConfig = {
    content: [
        './src/**/*.jsx',
        './src/**/*.js',
        './public/index.html',
        './pages/**/*.js',
    ],
    whitelist: ['html', 'body'],
    css: ['./src/tailwind.scss'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
const cssnanoConfig = {
    preset: 'default',
};

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production'
            ? {
                  '@fullhuman/postcss-purgecss': purgecssConfig,
                  cssnano: cssnanoConfig,
              }
            : {}),
    },
};