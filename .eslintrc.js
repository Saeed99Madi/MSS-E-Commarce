module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'promise'],
  rules: {
    'no-nested-ternary': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'lf',
      },
    ],
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
  },
  overrides: [
    {
      files: ['__tests__/*.test.ts'],
      rules: {
        'promise/prefer-await-to-then': 'off',
        'promise/prefer-await-to-callbacks': 'off',
      },
    },
  ],
};
