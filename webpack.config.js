const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          'css-loader'
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
		    loader: "file-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin('styles.css'),
  ]
}