const path = require('path')
const BannerWebpackPlugin = require('./plugins/banner-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new BannerWebpackPlugin({
      content: `
         
              //                          _ooOoo_                               //
              //                         o8888888o                              //
              //                         88" . "88                              //
              //                         (| ^_^ |)                              //
              //                         O\  =  /O                              //
              //                      ____/'---'\____                           
              //                    .'  \\|     |//  '.                         //
              //                   /  \\|||  :  |||//  \                        //
              //                  /  _||||| -:- |||||-  \                       //
              //                  |   | \\\  -  /// |   |                       //
              //                  | \_|  ''\---/''  |   |                       //
              //                  \  .-\__    ___/-. /                       //
              //                ___. .'  /--.--\  . . ___                     //
              //              ."" '<  .___\_<|>_/___.'  >'"".                  //
              //            | | :  '- \'.;'\ _ /';.'/ - ' : | |                 //
              //            \  \ '-.   \_ __\ /__ _/   .-' /  /                 //
              //      ========'-.____'-.___\_____/___.-'____.-'========         //
              //                           '=---='                              //
              //      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
              //             佛祖保佑          永无BUG         永不修改                	  //
              `,
      length: 1361,
    })
  ]
}