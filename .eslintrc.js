module.exports = {
  extends: [
    '@yext/slapshot/typescript-react'
  ],
  plugins: ['unused-imports'],
  ignorePatterns: ['lib', 'public'],
  rules: {
    'unused-imports/no-unused-imports': 'warn',
    '@typescript-eslint/semi': [
      'warn',
      'never'
    ],
    'import/no-anonymous-default-export': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off'
  }
}
