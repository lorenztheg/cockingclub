const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/client/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    },
})
