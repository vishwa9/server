const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Tell webpack the root file of our saerver application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);