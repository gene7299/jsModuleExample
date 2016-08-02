var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
       index1: "./main1.js",
       index2: "./main2.js"
   },
    output: {
        path: "./build/",
        publicPath:"./build/",
        filename: "[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath:""})},
            { test: /\.jpg$/, loader: "file?name=[name]-[hash].[ext]" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        },
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js")

      )
    ]
};
