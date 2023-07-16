import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..', '..')

// docs
export const docsDirName = 'docs'
export const docRoot = resolve(projRoot, docsDirName)
export const vpRoot = resolve(docRoot, '.vitepress')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')

/** `/dist/ai-ui` */
export const aiOutput = resolve(buildOutput, 'ai-ui')