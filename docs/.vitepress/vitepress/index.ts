// reset
import '../../../packages/theme-chalk/src/reset.scss'
// for dev
import '../../../packages/theme-chalk/src/index.scss'
// for dark mode
import '../../../packages/theme-chalk/src/dark/css-vars.scss'

import './styles/css-vars.scss'
import './styles/app.scss'

// import 'uno.css'

import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'

import type { Component } from 'vue'

export default VPApp

export const globals: [string, Component][] = [
	['Demo', VPDemo]
]