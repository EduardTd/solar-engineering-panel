module.exports = {
    extends: [
        '@werkzeugkiste',
        '@werkzeugkiste/eslint-config/react',
        '@werkzeugkiste/eslint-config/typescript',
        '@werkzeugkiste/eslint-config/node',
    ],
    globals: {
        __BROWSER__: true,
        __SERVER__: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'react': {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'no-debugger': 'off',
    },
};
