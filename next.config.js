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
const withImages = require('next-images');
const isProd = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

/* CONFIG */
module.exports = withBundleAnalyzer(withImages(withSass({
    exportPathMap: async function () {
        return ROUTES;
    },
    distDir: 'build',
    assetPrefix: isProd ? BASE_URI : ''
})));