import AiButton from './button'
export * from './button'
import { App } from 'vue'

export default {
	install: (app: App) => {
		app.use(AiButton)
	}
}