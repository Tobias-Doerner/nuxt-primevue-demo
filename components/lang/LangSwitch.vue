<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const currentLocale = computed({
  get() {
    return locales.value.find(el => el.code === locale.value)
  },
  set(newLocale) {
    if (newLocale)
      setLocale(newLocale.code)
  },
})
</script>

<template>
  <Select v-model="currentLocale" :options="locales" option-label="code" size="small" />
</template>
