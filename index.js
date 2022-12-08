module.exports = {
  extends: ['./rules/base'].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
}
