module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2023, sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    quotes: ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-unreachable': 'error',
    camelcase: ['error', { properties: 'never' }],
    eqeqeq: 'error',
    'no-console': 'warn',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-unused-expressions': 'error',
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'prefer-const': 'warn',
    semi: 'error',
    'comma-spacing': 'error',
  },
};
