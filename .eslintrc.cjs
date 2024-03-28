module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'airbnb',
        'airbnb-typescript',
        'plugin:import/typescript',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['react-refresh', '@typescript-eslint'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        indent: ['error', 4],
        '@typescript-eslint/indent': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'linebreak-style': 0,
        'react/no-array-index-key': 'off',
        'react/require-default-props': 'off',
        'react/jsx-one-expression-per-line': 'off'
    },
};
