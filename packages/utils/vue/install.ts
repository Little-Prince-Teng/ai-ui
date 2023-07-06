import type { SFCWithInstall } from './typescript'
import type { App } from 'vue'

export const withInstall = <T>(comp: T) => {
	(comp as SFCWithInstall<T>).install = (app: App) => {
		const name = (comp as any).name
		//注册组件
		app.component(name, comp as SFCWithInstall<T>)
	}
	return comp as SFCWithInstall<T>
}