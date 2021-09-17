/* eslint-disable */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
/* eslint-enable */

module.exports = {
	mode: 'development',
	entry: './src/main/index.tsx',
	output: {
		path: path.join(__dirname, 'public/js'),
		publicPath: '/public/js',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@': path.join(__dirname, '/src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						attrs: [':src'],
					},
				},
			},
			{
				test: /\.(mp4|svg|png|jpe?g|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
		devMiddleware: {
			index: true,
			mimeTypes: { 'text/html': ['phtml'] },
			serverSideRender: true,
			writeToDisk: true,
		},
	},

	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new DefinePlugin({
			'process.env.API_URL': JSON.stringify(
				'https://rickandmortyapi.com/api'
			),
		}),
	],
};
