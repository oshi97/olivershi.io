module.exports = {
  plugins: ['unused-imports'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  ignorePatterns: ['lib', 'public'],
  rules: {
    'unused-imports/no-unused-imports': 'warn'
  }
}
