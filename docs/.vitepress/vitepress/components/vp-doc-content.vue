<script lang="ts" setup>
import { useData } from 'vitepress'
import VPPageNav from './doc-content/vp-page-nav.vue'

const { page } = useData()
</script>

<template>
  <div class="doc-content-wrapper">
    <div class="doc-content-container">
      <Content class="doc-content" />
      <VPPageNav />
    </div>
  </div>
</template>
