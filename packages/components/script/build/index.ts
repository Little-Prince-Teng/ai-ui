import delPath from "../utils/delpath"
import { series, parallel, src, dest } from "gulp"
import { pkgPath, componentPath } from "../utils/paths"
// import gulpSass from 'gulp-sass'
import autoprefixer from "gulp-autoprefixer"
import run from "../utils/run"

//删除打包文件夹 ai-ui
export const removeDist = () => {
	return delPath(`${pkgPath}/ai-ui`)
}

//打包样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/style/**.scss`)
		.pipe(autoprefixer())
		.pipe(dest(`${pkgPath}/ai-ui/lib/src`))
		.pipe(dest(`${pkgPath}/ai-ui/es/src`))
}

//打包组件
export const buildComponent = async () => {
	run("pnpm run build", componentPath)
}

export default series(
	async () => removeDist(),
	parallel(
		async () => buildStyle(),
		async () => buildComponent()
	)
)
