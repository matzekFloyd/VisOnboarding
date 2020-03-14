/* CONSTANTS */
const webpack = require('webpack');
require('dotenv').config();
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
            '/onboarding': {page: '/onboarding'},
            '/visualisation': {page: '/visualisation'},
            '/results': {page: '/results'}
        };
    },
    distDir: 'build',
    assetPrefix: process.env.NODE_ENV === 'production' ? "/vis" : "",
    webpack(config, options) {
        config.resolve.alias['src'] = path.join(__dirname, "/src");
        config.resolve.alias['lib'] = path.join(__dirname, "/lib");
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        return config
    },
})));