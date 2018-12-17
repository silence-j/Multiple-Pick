const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var isDev = process.env.NODE_ENV === 'development';
let config ={
    mode: isDev ? 'development' : 'production',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process-env': {
              NODE_ENV: isDev ? 'development' : 'production' 
            }
          })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test:/\.js|.jsx$/,
                loader:'babel-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                query:{
                    presets:["@babel/preset-env"]
                }
             },
             {
                test: /\.css$/,
                use:['style-loader','css-loader']
             }
        ]
    }
}
if(isDev){
    config.devtool = '#cheap-module-eval-source-map'
    config.entry = path.join(__dirname, 'src/main.js')
    config.output =  {
        filename: 'bundle.[hash].js',
        path: path.join(__dirname, 'dist')  
      }
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true  
            }
          },
          'less-loader'  
        ]
      }
    )
    config.plugins.push(
        new HTMLPlugin({
            template: path.join(__dirname, 'src/index.html')
         }) 
    )
    config.devServer = {
      port: 8000,
      overlay: {
        errors: true
      },
      hot: true
    }
    config.plugins.push(
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = './src/lib/index.js',
    config.output =  {
        path: path.join(__dirname, './dist'),
        publicPath:'',
        filename:'vue-multiple-pick.js',
        libraryTarget: 'umd',
        library:'MultiplePick'  
    }
}
module.exports = config