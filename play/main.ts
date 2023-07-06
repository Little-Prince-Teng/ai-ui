import { createApp } from "vue"
import AiUI from '@ai-ui/components'

// 自定义组件样式，用于覆盖 element-plus 组件样式
import '@ai-ui/theme-chalk/dist/index.css'

;(async () => {
	const apps = import.meta.glob('./src/*.vue')
	const name = location.pathname.replace(/^\//, '') || 'App'
	const file = apps[`./src/${name}.vue`]
	if (!file) {
		location.pathname = 'App'
		return
	}
	const App = (await file()).default
	const app = createApp(App)

	app.use(AiUI)
	app.mount('#play')
})()
