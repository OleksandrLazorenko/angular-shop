const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// webpack plugins
const WebpackMd5Hash = require('webpack-md5-hash');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
        new WebpackMd5Hash(),
        new UglifyJsPlugin({
          beautify: false, //prod
          mangle: { screw_ie8 : true }, //prod
          compress: { screw_ie8: true }, //prod
          comments: false //prod
        })

    ]
});