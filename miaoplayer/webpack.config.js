'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {  
      path: path.join(__dirname, '/dist/'),// 输出文件的保存路径  
      filename: 'bundle.js' // 输出文件的名称  
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './app/index.html',
          inject: 'body',
          filename: './index.html'
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
      })
  ],
  module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude:  __dirname + '/node_modules/',
          query: {
            presets: ['react','es2015']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?importLoaders=1'
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        }
        /*{
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.tpl$/,
          loader: 'ejs-loader'
        },
        {
          test: /\.png|jpg|gif|svg$/,
            loaders: [
              'url-loader?limit=200000&name=assest/[name]-[hash:5].[ext]',
              'image-webpack-loader'
            ],
        }*/
      ]
    }
  }

