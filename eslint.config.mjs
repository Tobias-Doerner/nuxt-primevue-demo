// @ts-check
import antfu from '@antfu/eslint-config'
// @ts-ignore
import vueI18n from '@intlify/eslint-plugin-vue-i18n'
// @ts-ignore
import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
}))
  .prepend(...tailwind.configs['flat/recommended'])
  .prepend(...vueI18n.configs['flat/recommended'])
  .override('@intlify/vue-i18n:base:setup', {
    rules: {
      '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
      '@intlify/vue-i18n/no-dynamic-keys': 'error',
      '@intlify/vue-i18n/no-missing-keys': 'error',
      '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
      '@intlify/vue-i18n/no-raw-text': [
        'error',
        { ignorePattern: '^[-—#:()&,.;:]+$' },
      ],
      '@intlify/vue-i18n/no-unused-keys': [
        'warn',
        {
          extensions: ['.js', '.ts', '.vue'],
        },
      ],
    },
    settings: {
      'vue-i18n': {
        localeDir: './i18n/locales/*.{json,json5,yaml,yml}',
        messageSyntaxVersion: '^9.0.0',
      },
    },
  })
