const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/front-end/',
  transpileDependencies: true
})

export default defineConfig({
  base: '/front-end/',
})