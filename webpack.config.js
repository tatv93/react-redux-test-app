module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        publicPath: "/",
        contentBase: "./src"
    }
};