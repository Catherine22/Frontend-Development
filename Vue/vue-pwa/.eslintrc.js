module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/recommended', 'prettier/vue', '@vue/typescript'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        quotes: ['error', 'single'],
        indent: ['error', 4],
        semi: [1, 'always'],
        camelcase: 2
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2018
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ],
    plugins: ['vue']
};
