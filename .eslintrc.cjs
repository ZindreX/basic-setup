module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // Should extend TypeScript plugins here, instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/jsx-runtime'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'] // Specify it only for TypeScript files
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Note: you must disable the base rule as it can report incorrect errors
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn'
  }
}
