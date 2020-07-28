const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        "app": "./frontend/src/js/app.jsx",
    },

    output: {
        path: path.resolve('./flaskr/static/assets'),
        filename: "[name].js"
    },

    module: {
	    rules: [
	        {   test: /\.js[x]?$/,
		    exclude: /node_modules/,
		    loader: "babel-loader"
	        }
        ]
    }
};
