const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loader'] // 加载器的查找路径，如果node_modules没有找到配置的loader，就会从./loader这个路径下查找
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 指定打包html文件参照的模板
      filename: 'index.html', // 生成的html文件名
      inject: true, // 是否将js放入head中 , 或者直接写 inject: 'head'
    }),
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
`
    })
  ]
}