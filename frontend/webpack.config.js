const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'development',
   entry: {
      'blocks.build': path.resolve(__dirname, './src/js/index.js'),
      'fields.build': path.resolve(__dirname, './src/js/fields.js'),
      'style': path.resolve(__dirname, './src/scss/style.scss')
   },
   output: {
      path: __dirname + '/dist'
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].css'
      }),
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules\/.*/,
            use:
            {
               loader: require.resolve('babel-loader'),
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.scss$/,
            use: [
               MiniCssExtractPlugin.loader,
               { loader: 'css-loader', options: { importLoaders: 1 } },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               }
            ]
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               { loader: 'css-loader', options: { importLoaders: 1 } }
            ]
         },
      ]
   }
};