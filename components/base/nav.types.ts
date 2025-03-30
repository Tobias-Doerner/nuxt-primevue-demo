export interface NavProps {
  prependIcon?: string
  to?: string
}

export interface NavItem {
  id: string
  title: string
  props: NavProps
  children?: NavItem[]
}

export interface NavTreeState {
  expandedItems: { [key: string]: boolean }
  isExpanded: { (id: string): boolean }
  expandItem: { (id: string): void }
  toggleExpand: { (id: string): void }
}

export const navTreeStateInjectionKey = Symbol('NavTree.navTreeState')
