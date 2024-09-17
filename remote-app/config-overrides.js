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
        "./HeroBanner": "./src/Components/HeroBanner/HeroBanner",
        "./ScrollingText": "./src/Components/ScrollingText/ScrollingText",
        "./MobileTransition": "./src/Components/MobileTransition/MobileTransition",
        "./SpinningCards": "./src/Components/SpinningCards/SpinningCards",
        "./Footer": "./src/Components/Footer/Footer",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.3.1" },
        "react-dom": { singleton: true, eager: true, requiredVersion: "^18.3.1" },
      },
    })
  );

  return config;
};
