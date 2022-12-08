module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  rules: {
    semi: ['error', 'never'],
    'no-console': 'error',
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_+$' },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
  },
}
