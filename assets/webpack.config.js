var webpack = require("webpack");
module.exports = {
	entry:['./search-employee-view/search.js'],
	output:{
		path:'./search-employee-view/dist',
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
					presets:['react','es2015']
				}
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