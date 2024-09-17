const { ModuleFederationPlugin } = require('webpack').container;
const { override, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = function override(config, env) {
  // Apply babelInclude for specific packages or directories
  config = override(
    babelInclude([
      path.resolve("./packages/app"),        // Add your app directory
      path.resolve("./packages/components"), // Add your components directory
      path.resolve("./packages/utils"),      // Add your utils directory
    ])
  )(config, env);

  // Set the public path for the host app
  config.output.publicPath = 'http://localhost:3000/'; // Adjust if Host App runs on a different port

  // Add the ModuleFederationPlugin
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js', // Remote App entry point
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^18.3.1' }, // Adjust React version as needed
        'react-dom': { singleton: true, eager: true, requiredVersion: '^18.3.1' },
      },
    })
  );

  return config;
};
