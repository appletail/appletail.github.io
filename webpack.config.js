const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMode = process.env.NODE_ENV.includes('dev');

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './index.html',
    favicon: 'favicon.ico',
  }),
];

if (!isDevMode) {
  plugins.push(
    new MiniCssExtractPlugin({
      linkType: false,
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
    })
  );
}

module.exports = {
  mode: 'development',
  devtool: isDevMode && 'cheap-module-source-map',
  entry: {
    main: './src/main.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDevMode
                  ? '[name]__[local]__[hash:base64:5]'
                  : '[hash:base64]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.md$/i,
        type: 'asset/source',
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|webp)?$/,
        type: 'asset',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
      },
    ],
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins,
};
