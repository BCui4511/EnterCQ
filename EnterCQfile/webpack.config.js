var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main.js', 
    output: {
        path: path.resolve(__dirname, './dist'), 
        publicPath: '/dist/', 
        filename: 'build.js' 
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};