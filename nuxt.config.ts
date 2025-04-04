import { definePreset } from '@primevue/themes'
import Nora from '@primevue/themes/nora'

const CustomNora = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}',
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}',
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)',
        },
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: 'app-dark',
      },
    },
  },
  devtools: { enabled: false },
  compatibilityDate: '2024-07-04',
  css: ['@/assets/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  ssr: false,
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
      useCookie: true,
    },
    lazy: true,
    locales: [
      {
        code: 'de',
        file: 'de-DE.json',
        language: 'de-DE',
        name: 'Deutsch',
      },
      {
        code: 'en',
        file: 'en-US.json',
        language: 'en-US',
        name: 'English',
      },
    ],
    strategy: 'no_prefix',
  },
  primevue: {
    autoImport: true,
    components: {
      exclude: ['Chart', 'Editor'],
    },
    options: {
      theme: {
        preset: CustomNora,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
        },
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: false,
  },
})
