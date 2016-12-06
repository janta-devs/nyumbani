var webpack = require("webpack");
module.exports = {
	entry:['./Navbar/nav.js'],
	output:{
		path:'./Navbar/dist',
		filename:'navbundle.js',
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