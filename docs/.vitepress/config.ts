import { REPO_BRANCH, REPO_PATH } from '@ai-ui/build-constants'
import { docsDirName } from '@ai-ui/build-utils'
import { languages } from './utils/lang'
import { head, sidebars, nav, mdPlugin } from './config/main'
import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
	const transformer = () => {
		return {
			props: [],
			needRuntime: true,
		}
	}

	const transformers = {}
	const directives = [
		'infinite-scroll',
		'loading',
		'popover',
		'click-outside',
		'repeat-click',
		'trap-focus',
		'mousewheel',
		'resize',
	]
	directives.forEach((k) => {
		transformers[k] = transformer
	})

	return transformers
}

const locales = {}
languages.forEach((lang) => {
	locales[`/${lang}`] = {
		label: lang,
		lang,
	}
})

console.log('languages', languages)

export const config: UserConfig = {
	title: 'AI-UI',
	description: 'a Vue 3 based component library for designers and developers',
	lastUpdated: true,
	head,
	themeConfig: {
		repo: REPO_PATH,
		docsBranch: REPO_BRANCH,
		docsDir: docsDirName,

		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		lastUpdated: 'Last Updated',

		logo: '/images/element-plus-logo.svg',
		logoSmall: '/images/element-plus-logo-small.svg',
		sidebars,
		nav,
		langs: languages
	},

	locales,

	markdown: {
		config: md => mdPlugin(md)
	},

	vue: {
		template: {
			ssr: true,
			compilerOptions: {
				directiveTransforms: buildTransformers(),
			},
		},
	}
}

export default config