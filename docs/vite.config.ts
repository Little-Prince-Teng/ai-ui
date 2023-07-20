import path from 'path'
import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
				resolvers: [
					ElementPlusResolver(),
					// 自动导入图标组件
					IconsResolver(),
				]
			}),
			Components({
				dirs: ['.vitepress/vitepress/components'],

				allowOverrides: true,

				resolvers: [
					ElementPlusResolver(),
					// 自动注册图标组件
					IconsResolver(),
				],
				
				// allow auto import and register components used in markdown
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
			}),
			Icons({
				autoInstall: true
			})
		],
		ssr: { noExternal: ['element-plus'] },
		// css: {
		// 	postcss: {
		// 		plugins: [
		// 			{
		// 				postcssPlugin: 'internal:charset-removal',
		// 				AtRule: {
		// 					charset: (atRule) => {
		// 						if (atRule.name === 'charset') {
		// 							atRule.remove();
		// 						}
		// 					}
		// 				}
		// 			}
		// 		]
		// 	}
		// }
	}
})