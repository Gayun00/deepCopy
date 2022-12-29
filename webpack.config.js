const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, 'dist'),
	},
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: {
			keep: /\.git/,
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};
