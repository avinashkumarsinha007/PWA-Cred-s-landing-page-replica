const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'remoteApp',
          filename: 'remoteEntry.js',
          exposes: {
            './Header': './src/Components/Header',
            './HeroBanner': './src/Components/HeroBanner/HeroBanner',
            './ScrollingText': './src/Components/ScrollingText/ScrollingText',
            './MobileTransition': './src/Components/MobileTransition/MobileTransition',
            './SpinningCards': './src/Components/SpinningCards/SpinningCards',
            './Footer': './src/Components/Footer/Footer',
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
            'react-dom': { singleton: true, eager: true, requiredVersion: '^18.3.1' },
          },
        })
          );
          webpackConfig.output.publicPath = 'http://localhost:3001/';
      return webpackConfig;
    },
  },
};
