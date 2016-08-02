var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./main.js",
    output: {
        path: "./build/",
        publicPath:"./build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath:""})},
            { test: /\.jpg$/, loader: "file" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};
