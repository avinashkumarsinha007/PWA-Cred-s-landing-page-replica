const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'hostApp',
          remotes: {
            remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
            'react-dom': { singleton: true, eager: true, requiredVersion: '^18.3.1' },
          },
        })
          );
          webpackConfig.output.publicPath = 'http://localhost:3000/';
      return webpackConfig;
    },
  },
};
