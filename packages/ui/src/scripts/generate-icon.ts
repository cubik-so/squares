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
        import React, { forwardRef } from 'react'
        import { CreateIcon } from '../../utils/create-icon'

         interface Props extends React.SVGProps<SVGSVGElement> {
            color?: string
        }

        const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { color, ...props },
    ref,
) => {


    // Assuming CreateIcon returns a ReactElement
    const IconElement =CreateIcon({
                displayName: '${icon.displayName}',
                paths: [
                    ${pathsString}
                ],
                viewBox: '${icon.viewBox}',
                ...props,
            })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const ${icon.displayName} = forwardRef(IconComponent)

        `
        fs.writeFileSync(__dirname + `/../icons/icon/${icon.name}.tsx`, component, 'utf-8')
    })

    addIconExport()
}

main()
