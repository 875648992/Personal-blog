const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.join(__dirname, './src/scss/common.scss'),
        path.join(__dirname, './src/scss/color.scss'),
      ]
    }
  }
}
