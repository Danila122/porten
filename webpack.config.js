const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') //объект для взаисодействия c HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development' //проверка, находимся ли мы в режиме разработки
const isProd = !isDev

//оптимизация CSS
const optimization = () =>{
  const config = {
    splitChunks:{
      chunks: 'all' //собирает все библиотеки в один файл
    }
  }

  if(isProd){
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const fileName = ext => isDev ? `${ext}/[name].${ext}` : `[name].[hash].${ext}`


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',

  //входной файл для приложения
  entry: {
    main: './js/index.js',
  }, 

 

  // yказываем точку выхода
  output: {
    clean: true, //очистика dist
    filename: fileName('js'), //хэш зависит от контента файла
    path: path.resolve(__dirname, 'dist'), //куда складывать результаты работы
    assetModuleFilename: 'assets/[hash][ext]' //помещаем картинки и шрифты в папку assets
  },
  resolve:{
    extensions: ['.js','.json'],
    alias: {}, //упрощает написание длинных путей
  },
  optimization: optimization(),
  
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    compress: true,
    port: 3000,
    hot: isDev,
    open: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html') ,
      minify:{
        collapseWhitespace: isProd, //оптимизация HTGML кода
      },
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css')
    }),
  ], 

  module: {
    rules:[
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader ,'css-loader'], // 'css-loader' - понимает import
        
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader ,'css-loader','sass-loader'],
       
      },
      {
        test: /\.(png|jpe?g|webp|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
    ],
  } //добавление функционала для работы с другими типами файлов
}