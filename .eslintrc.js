module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:jest/recommended', // eslint-plugin-jest
    'plugin:jest/style', //  eslint-plugin-jest - syntax styles
    'plugin:jest-formatting/recommended', // eslint-plugin-jest-formatting
    'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from eslint-plugin-react-hooks
    'plugin:jsx-a11y/recommended', // Usees the eslint-plugin-jsx-a11y plugin
    'prettier',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'anywhere' }],
    'no-case-declarations': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
