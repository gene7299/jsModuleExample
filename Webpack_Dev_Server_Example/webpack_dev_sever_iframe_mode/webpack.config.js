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
            { test: /\.json$/,  loader: 'file?name=[name].[ext]' }
        ]
    }
};
