module.exports = {
    entry: "./main.js",
    output: {
        path: "./build/",
        publicPath:"./build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=10000&name=img/[name].[ext]' }
        ]
    }
};
