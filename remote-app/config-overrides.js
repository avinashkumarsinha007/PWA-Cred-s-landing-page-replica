const path = require("path");
const { override, babelInclude } = require("customize-cra");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = function override(config, env) {
  // Apply babelInclude for the specific packages
  config = override(
    babelInclude([
      path.resolve("./packages/app"),
      path.resolve("./packages/components"),
      path.resolve("./packages/utils"),
    ])
  )(config, env);

  // Set public path for the remote app
  config.output.publicPath = "http://localhost:3001/";

  // Add the ModuleFederationPlugin
  config.plugins.push(
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Components/Header",
        // "./Cart": "./src/Components/Cart",
        // "./ProductList": "./src/Components/ProductList",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.3.1" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^18.3.1" },
      },
    })
  );

  return config;
};
