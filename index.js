module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react-hooks', 'jest', 'cypress'],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  rules: {
    'linebreak-style': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error'
  }
};
