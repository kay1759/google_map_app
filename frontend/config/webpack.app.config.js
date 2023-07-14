const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        "app": "./frontend/src/js/app.tsx",
    },

    output: {
        path: path.resolve('./static/assets'),
        filename: "[name].js"
    },

    module: {
	    rules: [
	        {   test: /\.ts[x]?$/,
		    exclude: /node_modules/,
		    loader: "ts-loader"
	        }
        ]
    },

    resolve: {
	extensions: [".js",".ts", ".tsx"]
    }
};
