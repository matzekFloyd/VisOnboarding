/* CONSTANTS */
const BASE_URI = "/vis";
const ROUTES = {
    '/': {page: '/'},
    '/assessment': {page: '/assessment'},
    '/onboarding/basic': {page: '/onboarding/basic'},
    '/onboarding/advanced': {page: '/onboarding/advanced'},
    '/onboarding/proficient': {page: '/onboarding/proficient'},
    '/visualisation': {page: '/visualisation'},
};
const withSass = require('@zeit/next-sass');
const isProd = process.env.NODE_ENV === 'production';

/* CONFIG */
module.exports = withSass({
    exportPathMap: async function () {
        return ROUTES;
    },
    distDir: 'build',
    assetPrefix: isProd ? BASE_URI : ''
});