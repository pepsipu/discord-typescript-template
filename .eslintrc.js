module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript/base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    project: './tsconfig.json'
  },
  rules: {
    'no-console': 0,
    'object-curly-spacing': 1,
  },
};
