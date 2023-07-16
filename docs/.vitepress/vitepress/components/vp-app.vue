<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import { useSidebar } from '../composables/sidebar'
import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'

const [isSidebarOpen, toggleSidebar] = useToggle(false)
const { hasSidebar } = useSidebar()
</script>

<template>
	<div class="App">
		<VPNav />

		<VPSubNav
      v-if="hasSidebar"
      :is-sidebar-open="isSidebarOpen"
      @open-menu="toggleSidebar(true)"
    />

		<VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #top>
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>

		<VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
    </VPContent>
	</div>
</template>