// config-overrides.js
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = function override(config, env) {
  config.output.publicPath = "http://localhost:3001/"; // Adjust if Remote App runs on a different port

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
        react: { singleton: true, eager: true, requiredVersion: "^18.3.1" }, // Match Host App's React version
        "react-dom": { singleton: true, eager: true, requiredVersion: "^18.3.1" },
      },
    })
  );

  return config;
};
