<script setup lang="ts">
import type { NavItem, NavTreeState } from './nav.types'
import { navTreeStateInjectionKey } from './nav.types'

interface Props {
  items?: NavItem[]
}
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const route = useRoute()

const navTreeState = reactive<NavTreeState>({
  expandedItems: {},
  isExpanded(id: string): boolean {
    return this.expandedItems[id] || false
  },
  expandItem(id: string): void {
    this.expandedItems[id] = true
  },
  toggleExpand(id: string): void {
    this.expandedItems[id] = !this.expandedItems[id]
  },
})

function findParents(data: NavItem[], to: string, parents: string[] = []): string[] {
  for (const item of data) {
    if (item.props.to === to) {
      return parents
    }
    if (item.children) {
      const result = findParents(item.children, to, [...parents, item.id])
      if (result.length > 0) {
        return result
      }
    }
  }
  return []
}

watch(
  () => route.fullPath,
  (val) => {
    findParents(props.items, val).forEach(id => navTreeState.expandItem(id))
  },
  { immediate: true },
)

provide(navTreeStateInjectionKey, navTreeState)
</script>

<template>
  <base-nav-tree-item :items="props.items" @toggle-expand="navTreeState.toggleExpand" />
</template>
