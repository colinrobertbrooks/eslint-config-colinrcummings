module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['jest', 'cypress'],
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  rules: {
    'linebreak-style': 0
  }
};
