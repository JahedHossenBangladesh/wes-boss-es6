// const webpack = require('webpack');
// const nodeEnv = process.env.NODE_ENV || 'development';
// module.exports = {
// devtool: 'source-map',
// entry: {
//     filename:'./app.js'
// },
// output :{
//     filename:'_build/bundle.js'
// },
// module:{
//     loaders:[
//         {
//             test:/\.js$/,
//             exclude:/node_modules/,
//             loader:'babel',
//             query:{
//                 presets:['es2015-native-modules']
//             }
//         }
//     ]
// },
// Plugin:[
//     new webpack.optimize.UglifyJsPlugin({
//         compress:{
//             warnings:false
//         },
//         output:{
//             comments:false
//         },
//         sourceMap:true
//     }),
//     new webpack.DefinePlugin({
//         'process.env':{
//             'NODE_ENV':JSON.stringify(nodeEnv)
//         }
//     })
// ]
// }
module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: "source-map",
  entry: "./app.js",
  output: {
    filename: "bundle.js",
  },
};