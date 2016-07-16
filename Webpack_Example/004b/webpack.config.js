module.exports = {
    entry: {
      app: "./main.js"
    },
    output: {
        filename: "bundle.js"
    },
    externals: {
      "jquery" : "$"
    },
    module: {
      loaders: [
        {
          test: require.resolve('./myModule1.js'),
          loader: 'exports?myMath1'
        }
      ]
    }
}
