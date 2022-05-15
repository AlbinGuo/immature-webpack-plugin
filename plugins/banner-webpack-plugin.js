class BannerWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('BannerWebpackPlugin', (compilation) => {
      console.log('---compiler---')
    })

    compiler.hooks.emit.tapAsync('BannerWebpackPlugin', (compilation, cb) => {
      debugger
      compilation.assets['banner.text'] = {
        source: () => {
          return this.options.content
        },
        size: () => {
          return this.options.content.length
        }
      }
      cb()
    });
  }
}

module.exports = BannerWebpackPlugin;