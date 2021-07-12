const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const rootDir = process.cwd()

module.exports = {
  entry: path.resolve(rootDir, 'src/index.js'),
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'bundle.[contenthash:8].js',
    clean: {
      keep: /asset\/image\//,
    },
  },
  module: {
    rules: [
      // 将代码转译为浏览器能够识别的 es5 代码
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        include: path.resolve(rootDir, 'src'),
        exclude: /node_modules/,
      },
      // 配置 webpack 打包 less 代码
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          // 因为style-loader和 mini-css-extract-plugin 冲突，需去除掉style-loader
          // 'style-loader',
          // 给 class 样式名称后加上一个哈希串
          {
            loader: 'css-loader',
            options: {
              modules: {
                compileType: 'module',
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          'less-loader',
          // 配置 css 自动添加浏览器前缀
          {
            loader: 'postcss-loader',
            options: { postcssOptions: { plugins: [['autoprefixer']] } },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '*.js',
          context: path.resolve(rootDir, 'public/js'),
          to: path.resolve(rootDir, 'dist/js'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new OptimizeCssPlugin(),
  ],
}
