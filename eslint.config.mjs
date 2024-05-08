// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(
  {
    languageOptions: {
      globals: {
        $fetch: false,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
    },
  },
  eslintPrettierRecommended,
)
