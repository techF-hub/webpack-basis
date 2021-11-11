const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入HtmlWebpackPlugin插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "/src/index.js"), // 入口文件
  output: {
    path: path.join( __dirname, "/dist"), // 打包后的文件存放的地方 
    filename: "bundle.js" // 打包后输出文件的文件名
  },
  devServer:{
    static: { // static: ['assets']
      directory: path.join(__dirname, '/dist')
    },
    hot: true,
    host:'localhost',
    port:'8888',
    open:true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,   // 正则匹配以.css结尾的文件
        use: ['style-loader', 'css-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
      },
      {
        test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
        use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),  // new一个插件的实例 
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/index.html")// new一个这个插件的实例，并传入相关的参数
    }),
    new CleanWebpackPlugin(),  // 默认删除output中path对应文件
    new webpack.HotModuleReplacementPlugin() // 热更新插件 
  ]
}