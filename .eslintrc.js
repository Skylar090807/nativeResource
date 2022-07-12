module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: [0, 'always'],
  },
}
