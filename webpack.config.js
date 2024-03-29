const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
	const isDev = env === 'development';

	return {
		mode: env.mode ?? 'development',
		entry: path.resolve(__dirname, 'src', 'index.js'),
		devtool: isDev ? 'inline-source-map' : false,
		devServer: isDev ? {
		    static: './build',
		    port: 8000,
		} : undefined,
		output: {
			filename: '[fullhash].bundle.js',
			path: path.resolve(__dirname, 'build'),
			assetModuleFilename: 'images/[hash][ext]',
			clean: true,
		},
		module: {
		    rules: [
				{
			        test: /\.html$/i,
			        loader: "html-loader",
			    },
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				{
	                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	                type: 'asset/resource',
	            },
		    ],
		},
		plugins: [new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})],
	}
};
