import path from 'path'
import fs from 'fs/promises'
import chalk from 'chalk'
import consola from 'consola'
import { docRoot, errorAndExit } from '@ai-ui/build-utils'

const credentialPlaceholder = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ3UUVxdmhVM3ZMT2EyWGljbVV5VCIsImp0aSI6Ijk5Mzc2ZjY3M2U5ZmRmZDkwYTU1NjI3NjY4MWMwZDRkNzRmYTE2ZDdkM2Y4YTc5M2MyZWVkMGFlNDI2OTcwNDU4MjljMTMzYjAyYzBhZjMyIiwiaWF0IjoxNjg5NzYwMDA0LjU1NzgyOSwibmJmIjoxNjg5NzYwMDA0LjU1NzgzMiwiZXhwIjoxNzIxMjk2MDA0LjQ4NTcyMSwic3ViIjoiMTU5MjQ4MzMiLCJzY29wZXMiOlsicHJvamVjdCJdLCJkb21haW4iOm51bGwsImFzc29jaWF0aW9ucyI6WyIqIl0sInNlc3Npb24iOjB9.IqE-Ab7swDG8HYkzabWwBkJ4lfgHH2-oKJBF1PEksBvyd75uPoH8sSS8_TOPN1zE1lkl1eMem67EoV6-e1Cc2cfM9Ni4aPrZ33iv5H0Z3LBQ2ObybP5HwdbHLXoDZiklIoJF2wwtDI0Avsz13ddkbzGSRDaTYrmYtCSfhCsUmoI6-DFNcnNgE-rZj5C1yyuqcPVL5zlMhCZCwkLF12VB5uR_O3jdTxRRXBxqembYYhloJQoxtVx984wumS07MDVkDHO3qMWqUywXmK9i4UginSOMJ5iPovghBhG9F_TyxadB5WfLqg1Flszy_gQ-67nArAVErK_9J9ynqP0DD2XF0yL2vgsHohKHnC3ECjj3WINIb4i1aoHPiNXdVvsez4tiBcqbW30dijja-Gfot0iTdkDT11DsrmWGvEHUhWuN2Wmq43dNmLhMA3HFfhEgUQRGinc7ehMxMYT4FBGMKgFAJ57a05IzVTOvmlHwVj5W4-gZ2iVQRi0bWKF7mXNlkFZYU4u_lIgLY98ll8CGUWrkRoLbrc2ZUwQK3dlNMFh76Z_5WV1QdTvIGxg1bzxpKA1Mu7vr4FJkrP-GV4tgFQJpJCUnmUWbO2HXRsv7ceK-zp2z4qkmALKqosi3DSfOlyGNb75IIt0FyvlfrK8oVC882uIpPxmaBEZunXhWlcGnPD4'

const CREDENTIAL = process.env.CROWDIN_TOKEN
if (!CREDENTIAL) {
  errorAndExit(new Error('Environment variable CROWDIN_TOKEN cannot be empty'))
}

;(async () => {
  consola.debug(chalk.cyan('Fetching Crowdin credential'))
  const configPath = path.resolve(docRoot, 'crowdin.yml')
  try {
    const file = await fs.readFile(configPath, {
      encoding: 'utf-8',
    })
    await fs.writeFile(
      configPath,
      file.replace(credentialPlaceholder, CREDENTIAL)
    )
    consola.success(chalk.green('Crowdin credential update successfully'))
  } catch (e: any) {
    errorAndExit(e)
  }
})()
