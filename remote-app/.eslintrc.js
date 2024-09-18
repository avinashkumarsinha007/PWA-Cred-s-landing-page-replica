module.exports = {
    env: {
      browser: true,
      es2021: true,
      'cypress/globals': true,
    },
    extends: [
      'react-app',
      'react-app/jest',
      'plugin:cypress/recommended',
    ],
    plugins: ['cypress'],
    rules: {
      // Add or override any rules here
    },
  };
  