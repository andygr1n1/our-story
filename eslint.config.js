// ESLint flat config (ESLint 9+). Port of the former .eslintrc.json / .eslintignore.
import tsPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    { ignores: ['node_modules/', 'dist/', 'dist-ssr/', '**/*.local'] },

    eslintPluginPlugin.configs.recommended,
    ...tsPlugin.configs['flat/recommended'],

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            prettier: prettierPlugin,
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/ban-ts-comment': 'off',
            'eslint-plugin/prefer-message-ids': 'off',
            'eslint-plugin/require-meta-schema': 'off',
            'eslint-plugin/require-meta-type': 'off',
            'eslint-plugin/prefer-object-rule': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            // `interface IStore extends Instance<typeof Store> {}` is the recommended mobx-state-tree pattern
            '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
        },
    },
]
