var webpack = require("webpack");
module.exports = {
	entry:['./registration/registration.js'],
	output:{
		path:'./registration/dist',
		filename:'bundle.js',
		publicPath:'/'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['react','es2015','stage-2']
				}
			},
			{
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	},
	
	 // plugins: [
	 //    new webpack.optimize.UglifyJsPlugin({
	 //      compress: {
	 //        warnings: false
	 //      },
	 //      output: {
	 //        comments: false,
	 //        semicolons: true
	 //      },
	 //      sourceMap: true
	 //    })
	 //  ]


}