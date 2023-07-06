import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..', '..')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')

/** `/dist/ai-ui` */
export const aiOutput = resolve(buildOutput, 'ai-ui')