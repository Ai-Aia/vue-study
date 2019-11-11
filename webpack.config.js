const path = require('path');
const htmlWebpackPlugin=require("html-webpack-plugin")

//通过node中的操作，向外暴露这个配置对象
module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'main.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            //匹配后缀名为css的文件
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            //匹配后缀名为less的文件
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //匹配后缀名为sass的文件
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },

            { test: /\.(png|jpg|gif|gpeg)$/, use: 'url-loader' },

            {test:/\.(ttf|woff2|woff|eot|svg)$/,use:['url-loader']},

            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },

            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}