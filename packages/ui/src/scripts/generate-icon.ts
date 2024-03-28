import * as fs from 'fs'
import { iconLibrary } from '../utils/iconLibrary'

const createIconFolder = () => {
    const iconFolderPath = __dirname + '/../icons/icon'
    if (!fs.existsSync(iconFolderPath)) {
        fs.mkdirSync(iconFolderPath)
    }
}

const addIconExport = () => {
    const iconExports = iconLibrary.map((icon) => {
        return `export * from './${icon.name}'`
    })

    fs.writeFileSync(__dirname + '/../icons/icon/index.ts', iconExports.join('\n'), 'utf-8')
}

const main = () => {
    createIconFolder()
    iconLibrary.forEach((icon) => {
        console.log(typeof icon.paths)
        const pathsString = icon.paths.map((path) => JSON.stringify(path)).join(',\n')
        const component = `
     import { CreateIcon } from '../../utils/create-icon'
      import type React from 'react'

        interface Props extends React.SVGProps<SVGSVGElement> {
            color?: string
        }

        export const ${icon.displayName} = (props: Props) =>
            CreateIcon({
                displayName: '${icon.displayName}',
                paths: [
                    ${pathsString}
                ],
                viewBox: '${icon.viewBox}',
                ...props,
            })
        `
        fs.writeFileSync(__dirname + `/../icons/icon/${icon.name}.tsx`, component, 'utf-8')
    })

    addIconExport()
}

main()
