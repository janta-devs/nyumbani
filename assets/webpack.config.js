var webpack = require("webpack");
module.exports = {
	entry:['./navbar/navbar.js'],
	output:{
		path:'./navbar/dist',
		filename:'navbar-bundle.js',
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


// module.exports = {
// 	entry:['./search-view/search.js'],
// 	output:{
// 		path:'./search-view/dist',
// 		filename:'bundle.js',
// 		publicPath:'/'
// 	},



}