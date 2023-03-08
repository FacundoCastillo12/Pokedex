module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'ignorePackages'],
  },
};
