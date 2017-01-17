var path = require('path');
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
	module: {
		loaders: [{
			loader: "babel-loader",
			// Skip any files outside of your project's `src` directory
			include: [
				path.resolve(__dirname, "src"),
			],
			// Only run `.js` and `.jsx` files through Babel
			test: /\.jsx?$/,
			// Options to configure babel with
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'react'],
			}
		},



		{
		   test: /\.scss$/,
		   loader: combineLoaders([
		    {
		     loader: 'style-loader'
		    }, {
		     loader: 'css-loader',
		     query: {
		      modules: true,
		      localIdentName: '[name]__[local]___[hash:base64:5]'
		     }
		    }, {
		     loader: 'sass-loader'
		    }, {
		     loader: 'autoprefixer-loader',
		     query: {
		      browsers:'last 2 versions'
		     }
		    }
		   ])
		  }




		]
	},
	output: {
		filename: 'bundle.js'
	},
	entry: [
		'./src/index.js'
	],
	watch: true,
	colors: true,
	progress: true
};
