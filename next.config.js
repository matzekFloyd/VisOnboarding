/* CONSTANTS */
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
const path = require('path');

/* CONFIG */
module.exports = withBundleAnalyzer(withImages(withSass({
    exportPathMap: async function () {
        return {
            '/': {page: '/'},
            '/assessment': {page: '/assessment'},
            '/context': {page: '/context'},
            '/onboarding': {page: '/onboarding'},
            '/visualisation': {page: '/visualisation'},
        };
    },
    distDir: 'build',
    assetPrefix: process.env.NODE_ENV === 'production' ? "/vis" : "",
    webpack(config, options) {
        config.resolve.alias['src'] = path.join(__dirname, "/src");
        return config
    },
})));