var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction ?
            config.build.productionSourceMap : config.dev.cssSourceMap,
        extract: isProduction
    }),
    postcss: [
        require('postcss-import')(),
        require('autoprefixer')({
            // browsers: ['last 6 versions', 'ie >= 9', "ff >= 15", 'Android >= 3.2', 'ios >= 6.0', 'Firefox >= 20', 'Safari >= 6.0']
        })
    ]
}