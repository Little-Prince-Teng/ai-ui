// import { withInstall } from "@ai-ui/utils"
import type { App, Plugin } from 'vue'
import Button from "./src/button.vue"

type SFCWithInstall<T> = T & Plugin

const withInstall = <T>(comp: T) => {
	(comp as SFCWithInstall<T>).install = (app: App) => {
		const name = (comp as any).name
		//注册组件
		app.component(name, comp as SFCWithInstall<T>)
	}
	return comp as SFCWithInstall<T>
}

export const AiButton = withInstall(Button)

export default AiButton
