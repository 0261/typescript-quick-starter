const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    externals: [
        nodeExternals()
    ],
    resolve: {
        extensions: [
            '.ts',
        ],
        plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname,),
        filename: '[name].js',
    },
    target: 'node',
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader"
        }]
    },
};