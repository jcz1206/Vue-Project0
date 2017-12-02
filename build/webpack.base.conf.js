var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

var webpack = require("webpack")
    // const ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/main.js',
        'jquery.SuperSlide.2.1.2': './src/assets/js/jquery.SuperSlide.2.1.2.js',
        'layer': './src/assets/lib/layer/mobile/layer.js'
            // ["slide"]
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'bootstrap': resolve('src/assets/bootstrap')
                // ,
                // 'jquery.SuperSlide.2.1.2':path.resolve(__dirname, '../static/js/jquery.SuperSlide.2.1.2.js')
                // 'jquery': 'jquery'
        }
    },
    module: {
        rules: [
            // 禁用eslint
            // {
            //   test: /\.(js|vue)$/,
            //   loader: 'eslint-loader',
            //   enforce: 'pre',
            //   include: [resolve('src'), resolve('test')],
            //   options: {
            //     formatter: require('eslint-friendly-formatter')
            //   }
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 100,
                    name: utils.assetsPath('img/[name].[ext]')
                        //utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]')
                        //utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
                // },
                // {
                //     test: /\.css$/,
                //     use: ExtractTextPlugin.extract({
                //         fallback: "style-loader",
                //         use: "css-loader"
                //     })
            }
        ]
    },
    // vue: {
    //     loaders: {
    //         css: ExtractTextPlugin.extract("css")
    //     }
    // },
    plugins: [
        // new ExtractTextPlugin("style.css"),
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            "window.jQuery": "jquery"
                // ,
                // "slide":'jquery.SuperSlide.2.1.2'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'jquery.SuperSlide.2.1.2', 'layer'],
            // chunks: chunks,
            minChunks: 2 // 提取所有chunks共同依赖的模块
        })
    ]
}