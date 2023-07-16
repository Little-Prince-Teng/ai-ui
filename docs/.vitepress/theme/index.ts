import VPApp, { globals } from "../vitepress"
import { define } from '../utils/types'
// import ElementPlus from 'element-plus'
// import 'uno.css'
import './style.css'
// import 'element-plus/dist/index.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
	Layout: VPApp,
	enhanceApp: ({ app }) => {
		// app.use(ElementPlus)

		globals.forEach(([name, Comp]) => {
			app.component(name, Comp)
		})
	},
})