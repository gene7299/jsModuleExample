module.exports = {
    entry: "./main.js",
    output: {
        path: "./build/",
        publicPath:"./build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpg$/, loader: "url?limit=100000&minetype=image/jpg" }
        ]
    }
};
