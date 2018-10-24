module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['jest', 'cypress'],
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  rules: {
    'linebreak-style': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off'
  }
};
