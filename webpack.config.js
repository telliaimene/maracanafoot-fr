const withTM = require("next-transpile-modules")(
    ["swiper", "ssr-window", "dom7"],
    {
      resolveSymlinks: false,
      debug: true,
    }
  );
  const path = require("path");
  
  module.exports = withTM({
    webpack: (config, options) => {
      if (options.isServer) {
        config.externals = ["swiper", ...config.externals];
      }
  
      config.resolve.alias["swiper/react"] = path.resolve(
        __dirname,
        ".",
        "node_modules",
        "swiper",
        "react",
        "swiper-react.js"
      );
      config.resolve.alias["swiper"] = path.resolve(
        __dirname,
        ".",
        "node_modules",
        "swiper",
        "swiper-bundle.js"
      );
  
      return config;
    },
  });
