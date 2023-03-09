module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier'],
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'ignorePackages'],
  },
};
