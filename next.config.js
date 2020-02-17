/* CONSTANTS */
const BASE_URI = "/vis";
const ROUTES = {
    '/': {page: '/'},
    '/assessment': {page: '/assessment'},
    '/context': {page: '/context'},
    '/onboarding/basic': {page: '/onboarding/basic'},
    '/onboarding/advanced': {page: '/onboarding/advanced'},
    '/onboarding/proficient': {page: '/onboarding/proficient'},
    '/visualisation': {page: '/visualisation'},
};
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';

/* CONFIG */
module.exports = withImages(withSass(withCSS({
    exportPathMap: async function () {
        return ROUTES;
    },
    distDir: 'build',
    assetPrefix: isProd ? BASE_URI : ''
})));