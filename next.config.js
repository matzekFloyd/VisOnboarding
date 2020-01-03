/* CONSTANTS */
const BASE_URI = "/vis-onboarding";
const ROUTES = {
    '/': {page: '/'},
    '/context': {page: '/context'},
    '/assessment': {page: '/assessment'},
    '/p/vis': {page: '/visualisation', query: {title: 'vis'}},
    '/p/vis-onboarding': {page: '/visualisation', query: {title: 'vis-onboarding'}},
};
const withSass = require('@zeit/next-sass');
const isProd = process.env.NODE_ENV === 'production';

/* CONFIG */
module.exports = withSass({
    exportPathMap: async function (
        defaultPathMap,
        {dev, dir, outDir, distDir, buildId}
    ) {
        return ROUTES;
    },
    distDir: 'build',
    assetPrefix: isProd ? BASE_URI : '',
    cssModules: true
});