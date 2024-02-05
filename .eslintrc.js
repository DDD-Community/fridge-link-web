module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    'JSX': true
  },
  extends: [
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['/src/assets/**', '/src/styles/**'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'prettier/prettier': ["error", { "endOfLine": "auto" }],
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
};
