module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    '.eslintrc.*',
    'vite.*',
  ],
  overrides: [
    {
      files: ['**/*.test.tsx'],
      rules: {
        'react/display-name': 'off',
      },
    },
  ],
};
