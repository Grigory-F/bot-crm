/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
}) */

module.exports = {
  lintOnSave: false,
  publicPath: '/',
 /*  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '^/auth': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }, */
}

