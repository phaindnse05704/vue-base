const fs = require("fs");

const prependScss = [
  // `@import "@/core/themes/vendor/_color.scss";`,
  // `@import "@/core/themes/vendor/_mixins.scss";`,
  // `@import "@/core/themes/vendor/_variables.scss";`
];

module.exports = {
  assetsDir: "static/",
  pluginOptions: {
    i18n: {
      locale: "vi",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  css: {
    loaderOptions: {
      // sass: {
      //   data: prependScss.join("")
      // }
    }
  },
  // chainWebpack: config => {
  //   if (config.plugins.has("extract-css")) {
  //     const extractCSSPlugin = config.plugin("extract-css");
  //     extractCSSPlugin &&
  //       extractCSSPlugin.tap(() => [
  //         {
  //           filename: "static/css/[name].css",
  //           chunkFilename: "static/css/[name].css"
  //         }
  //       ]);
  //   }
  // },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      filename: "static/js/[name].js",
      chunkFilename: "static/js/[name].js"
    }
  },
  devServer: {
    open: true,
    compress: true,
    setup(app) {

      // app.post("/api/templates/import/:code", (req, res) => {
      //   res.status(400).json({
      //     status: "error",
      //     message: "You have import this template already"
      //   });
      // });
      // app.get("/api/agency/unlinkShop/:id", (req, res) => {
      //   res.status(200).json({
      //     status: true,
      //     message: "Ok desu"
      //   });
      // });
      // app.put("/api/groups/:id", (req, res) => {
      //   fs.readFile("./public/api/group/update", "utf8", function(err, data) {
      //     res.send(JSON.parse(data));
      //   });
      // });
      // app.delete("/api/groups/:id", (req, res) => {
      //   fs.readFile("./public/api/group/delete", "utf8", function(err, data) {
      //     res.send(JSON.parse(data));
      //   });
      // });
    }
  }
};
