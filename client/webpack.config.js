const autoprefixer = require('autoprefixer');
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./main.js"
    },
    module: {
        rules: [
            {
                test: /\.(js||jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer()
                            ],
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 3000
      }
}
