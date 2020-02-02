const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.jsx',
        './src/**/*.js',
        './public/index.html',
        './pages/**/*.js',
        './pages/onboarding/**/*.js'
    ],
    whitelist: ['html', 'body'],
    css: ['./src/tailwind.scss'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
const cssnano = require('cssnano')({
    preset: 'default',
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []
    ],
};