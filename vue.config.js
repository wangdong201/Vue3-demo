const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnable: true,
        },
      },
    },
  },
  transpileDependencies: true,
  devServer: {
    proxy: "http://192.168.145.28:1024/api/v1",
  },
});
