module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'linebreak-style': ['warn', 'windows'],
    'object-curly-newline': ['warn', { multiline: true }],
    'no-underscore-dangle': ['warn', { allow: ['foo_', '_bar'] }],
  },
  settings: { 'import/ignore': /\.css$/ },
};
