<script setup lang="ts">
import type { Reactive } from 'vue'
import type { NavItem, NavTreeState } from './nav.types'
import { navTreeStateInjectionKey } from './nav.types'

interface Props {
  items?: NavItem[]
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const navTreeState = inject<Reactive<NavTreeState>>(navTreeStateInjectionKey) as Reactive<NavTreeState>

function hasChildren(item: NavItem): boolean {
  if (item.children === null)
    return false
  if (item.children === undefined)
    return false
  if (item.children.length === 0)
    return false
  return true
}
</script>

<template>
  <transition name="slidedown">
    <ul
      v-if="props.items !== undefined && props.items.length > 0"
      class="ml-6 list-none overflow-hidden"
    >
      <template v-for="item in props.items" :key="item.id">
        <li>
          <router-link
            v-if="!hasChildren(item) && item.props.to !== undefined"
            v-slot="{ href, isActive }"
            :to="item.props.to"
          >
            <a
              :href="href"
              class="item-hover-effect flex cursor-pointer items-center justify-between px-4 py-2"
              @click="navTreeState.toggleExpand(item.id)"
            >
              <div class="flex items-center gap-2">
                <i :class="[{ 'text-red-600': isActive }, item.props.prependIcon]" />
                <span :class="[isActive ? 'font-bold' : 'font-medium']">{{ item.title }}</span>
              </div>
              <i
                v-if="hasChildren(item)"
                :class="[navTreeState.isExpanded(item.id) ? 'pi pi-chevron-up' : 'pi pi-chevron-down']"
              />
            </a>
          </router-link>

          <a
            v-else
            class="item-hover-effect flex cursor-pointer items-center justify-between px-4 py-2"
            @click="navTreeState.toggleExpand(item.id)"
          >
            <div class="flex items-center gap-2">
              <i :class="[item.props.prependIcon]" />
              <span class="">{{ item.title }}</span>
            </div>
            <i
              v-if="hasChildren(item)"
              :class="[navTreeState.isExpanded(item.id) ? 'pi pi-chevron-up' : 'pi pi-chevron-down']"
            />
          </a>
        </li>
        <li v-if="hasChildren(item)">
          <BaseNavTreeItem v-show="navTreeState.isExpanded(item.id)" :items="item.children" />
        </li>
      </template>
    </ul>
  </transition>
</template>

<style scoped>
.leaf-item {
  @apply flex cursor-pointer items-center gap-2 px-4 py-2;
}

.item-hover-effect {
  @apply transition-colors duration-500 hover:bg-surface-600;
}

.slidedown-enter-active {
  transition: max-height 0.5s ease-in-out;
}
.slidedown-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 500px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
