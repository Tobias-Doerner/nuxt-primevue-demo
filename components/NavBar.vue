<script setup lang="ts">
const { t } = useI18n()
const items = computed(() => [
  {
    id: '0',
    title: t('navbar.pages'),
    props: { prependIcon: 'pi pi-list' },
    children: [
      {
        id: '0',
        title: t('navbar.home'),
        props: { prependIcon: 'pi pi-home', to: '/' },
      },
      {
        id: '1',
        title: t('navbar.about'),
        props: { prependIcon: 'pi pi-info-circle', to: '/about' },
      },
    ],
  },
])
</script>

<template>
  <div class="p-2">
    <base-nav-tree :items="items" />
  </div>
</template>
