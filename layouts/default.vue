<script setup lang="ts">
const navbarVisible = ref(true)
</script>

<template>
  <div class="flex h-screen flex-row">
    <transition name="slide-fade">
      <nav v-show="navbarVisible" class="flex w-80 flex-col bg-zinc-700">
        <span class="pi pi-prime m-2 text-center" style="font-size: 3rem; color: var(--p-zinc-400)" />
        <div class="overflow-y-auto">
          <NavBar />
        </div>
      </nav>
    </transition>

    <div class="flex w-full flex-col">
      <header class="flex flex-row items-center bg-zinc-800 p-2">
        <Button icon="pi pi-bars" variant="text" rounded @click="navbarVisible = !navbarVisible" />
        <div class="grow" />
        <lang-switch />
      </header>

      <main class="h-full overflow-y-auto p-2">
        <slot />
      </main>

      <footer class="bg-zinc-800 p-2 text-center">
        {{ $t('app.name') }} — {{ new Date().getFullYear() }}
      </footer>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
