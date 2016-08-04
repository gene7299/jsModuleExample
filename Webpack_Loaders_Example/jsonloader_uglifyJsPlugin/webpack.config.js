var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: "./main.js",
    output: {
        path: "./build/",
        publicPath:"./build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/,  loader: 'json-loader' }
        ]
    },
    plugins: [
      new uglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
};
