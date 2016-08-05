var webpack = require('webpack');

module.exports = {
    entry: {
      app: ["./appsrc/main.js"]
    },
    output: {
        path: __dirname + "/appsrc/build/",
        publicPath:"/build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css"}
        ]
    }
};
