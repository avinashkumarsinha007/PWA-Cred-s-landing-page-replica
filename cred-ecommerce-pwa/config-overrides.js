// config-overrides.js
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = function override(config, env) {
  config.output.publicPath = 'http://localhost:3000/'; // Adjust if Host App runs on a different port

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^18.3.1' }, // Adjust React version as needed
        'react-dom': { singleton: true, eager: true, requiredVersion: '^18.3.1' },
      },
    })
  );

  return config;
};


