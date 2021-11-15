module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'max-classes-per-file': 'off',
    'object-curly-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
        printWidth: 100,
      },
    ],
    'react/jsx-wrap-multilines': ['error', { arrow: true, return: true, declaration: true }],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'no-void': ['error', { allowAsStatement: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    "@typescript-eslint/no-unsafe-return": 'off'
  },
  exclude: ["node_modules", "scripts"]
}
