import path from 'path'
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'
import type { Alias } from 'vite'

const alias: Alias[] = [
	{
		find: '~/',
		replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
	},
]

export default defineConfig(() => {
	return {
		resolve: {
			alias
		},
		plugins: [
			MarkdownTransform(),
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			})
		]
	}
})