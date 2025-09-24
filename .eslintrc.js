module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'react-native'],
  rules: {
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/split-platform-components': 'off',
    'react-native/no-raw-text': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
