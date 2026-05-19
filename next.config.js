/* CONSTANTS */
const webpack = require('webpack');
require('dotenv').config();
const path = require('path');

/* CONFIG */
module.exports = {
    output: 'export',
    distDir: 'build',
    assetPrefix: "",
    webpack(config, options) {
        config.resolve.alias['src'] = path.join(__dirname, "/src");
        config.resolve.alias['lib'] = path.join(__dirname, "/lib");
        const env = {
            'process.env.NEXT_PUBLIC_API_BASE_URL': JSON.stringify(process.env.NEXT_PUBLIC_API_BASE_URL),
            'process.env.NEXT_PUBLIC_APP_ENV': JSON.stringify(process.env.NEXT_PUBLIC_APP_ENV),
        };
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
};