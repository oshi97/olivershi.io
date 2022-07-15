module.exports = {
  extends: [
    '@yext/slapshot/typescript-react'
  ],
  plugins: ['unused-imports'],
  ignorePatterns: ['lib', 'public'],
  rules: {
    'linebreak-style': [
      'warn',
      'windows'
    ],
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/semi': [
      'warn',
      'never'
    ],
    'import/no-anonymous-default-export': 'off'
  }
}
