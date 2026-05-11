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
        const env = Object.keys(process.env).reduce((acc, curr) => {
            if (!curr.startsWith('NEXT_PUBLIC_')) {
                return acc;
            }
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});
        config.plugins.push(new webpack.DefinePlugin(env));
        return config;
    },
};