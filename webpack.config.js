const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: { app: path.resolve(__dirname, './src/index.js') },
    target: 'web',
    devServer: {
        contentBase: './',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}