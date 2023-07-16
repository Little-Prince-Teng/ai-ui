import fs from 'fs'
import path from 'path'
import { vpRoot } from '@ai-ui/build-utils'
import { languages } from '../utils/lang'

import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
	[
		'script',
		{},
		`;(() => {
      window.supportedLangs = ${JSON.stringify(languages)}
    })()`
	],

	['script', {}, fs.readFileSync(path.resolve(vpRoot, 'lang.js'), 'utf-8')]
]

head.push([
	'script',
	{},
	fs.readFileSync(path.resolve(vpRoot, 'dark-mode.js'), 'utf-8')
])