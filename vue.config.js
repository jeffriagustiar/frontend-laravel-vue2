const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports={
//   devServer: {
//     proxy: 'http://payakumbuh.sipd.kemendagri.go.id/',
//     compress: true,
//     disableHostCheck: true,
//   }
// }