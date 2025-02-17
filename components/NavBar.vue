<script setup lang="ts">
const { t } = useI18n()
const items = computed(() => [
  {
    key: '0',
    label: t('navbar.home'),
    icon: 'pi pi-home',
    route: '/',
  },
  {
    key: '1',
    label: t('navbar.about'),
    icon: 'pi pi-info-circle',
    route: '/about',
  },
])
</script>

<template>
  <div class="p-2">
    <router-link
      v-for="item in items"
      v-slot="{ href, isActive, navigate }"
      :key="item.key"
      :to="item.route"
      class="m-1 flex flex-row rounded bg-stone-800 ring-stone-600 hover:bg-stone-900 hover:ring-1"
    >
      <a
        :href="href"
        class="flex items-center px-4 py-2"
        @click="navigate"
      >
        <span :class="[item.icon, { 'text-red-500': isActive }]" />
        <span class="mx-2">{{ item.label }}</span>
      </a>
    </router-link>
  </div>
</template>
