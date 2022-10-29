const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('@/assets'))
      .set('common', resolve('@/common'))
      .set('components', resolve('@/components'))
      .set('networks', resolve('@/networks'))
      .set('views', resolve('@/views'));
  }
})
