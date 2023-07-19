<script setup lang="ts">
import { useLang } from '../../.vitepress/vitepress/composables/lang'
import i18n from '../../.vitepress/i18n/en-US.json'
import { computed } from 'vue'

const lang = useLang()

const locale = computed(() => i18n[lang.value])
</script>

<template>
	<el-button type="primary">{{ locale['component.button.text'] }}</el-button>
</template>