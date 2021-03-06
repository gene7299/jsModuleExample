var webpack = require("webpack");

module.exports = {
    entry: {
      app: "./main.js",
      vendor: ["jquery"],
    },
    output: {
        filename: "bundle.js"
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
}
