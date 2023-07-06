<template>
	<button class="ai-button" :class="buttonStyle">测试按钮</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import '../style/index.scss'

defineOptions({
	name: 'AiButton'
})

type ButtonProps = {
  type?: string
}

const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return { [`ai-button--${buttonProps.type}`]: buttonProps.type }
})

</script>

