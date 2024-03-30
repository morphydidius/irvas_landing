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
		} : undefined,
		output: {
			filename: '[fullhash].bundle.js',
			path: path.resolve(__dirname, 'build'),
			assetModuleFilename: 'assets/[hash][ext]',
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
	            {
					test: /\.(?:js|mjs|cjs)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							],
						}
					},
				},
		    ],
		},
		plugins: [new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		}
	}
};
