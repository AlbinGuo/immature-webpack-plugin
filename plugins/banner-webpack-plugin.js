class BannerWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('BannerWebpackPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('BannerWebpackPlugin', (data, cb) => {
        data.html = data.html.replace('</head>', `<script>${this.options.content}</script></head>`);
        cb(null, data);
      });
    });
  }
}