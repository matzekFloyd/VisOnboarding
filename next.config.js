/* CONSTANTS */
const BASE_URI = "/MIT/VisOnboarding";
const ROUTES = {
    '/': {page: '/'},
    '/about': {page: '/about'},
    '/p/hello-nextjs': {page: '/post', query: {title: 'hello-nextjs'}},
    '/p/learn-nextjs': {page: '/post', query: {title: 'learn-nextjs'}},
    '/p/deploy-nextjs': {page: '/post', query: {title: 'deploy-nextjs'}},
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