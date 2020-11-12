module.exports = {
  'env': {
    'es6': true,
    'browser': true,
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'indent': [
      'error',
      2,
    ],
    'arrow-parens': [
      'warn',
      'as-needed',
    ],
    'comma-spacing': [
      'warn',
      {
        after: true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    '@typescript-eslint/semi': [
      'warn',
    ],
  },
};
