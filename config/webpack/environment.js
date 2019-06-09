const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
let fileLoader = environment.loaders.get('file')
fileLoader.exclude = /\.(js|jsx|coffee|ts|tsx|vue|elm|scss|sass|css|html|svg|json)?(\.erb)?$/


environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.append('pug', {
    test: /\.pug$/,
    loader: 'pug-plain-loader'
})
environment.loaders.append('svg', {
    test: /\.svg$/,
    loader: 'vue-svg-loader'
})

module.exports = environment
