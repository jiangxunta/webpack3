const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {// 加载CSS
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {// 加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {// 加载 CSV、TSV 文件
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {// 加载 XML 文件
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};