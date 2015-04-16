module.exports = {
    entry: './index.jsx',
    output: {
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'react'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}