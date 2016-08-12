const webpack = require('webpack');

module.exports = {
    entry: './example/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/example',
        publicPath: '/example/',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
