import * as fs from 'fs'
import { iconLibrary } from './iconLibrary'

const createIconFolder = () => {
    const iconFolderPath = __dirname + '/icon'
    if (!fs.existsSync(iconFolderPath)) {
        fs.mkdirSync(iconFolderPath)
    }
}

const addIconExport = () => {
    const iconExports = iconLibrary.map((icon) => {
        return `export * from './${icon.name}'`
    })

    fs.writeFileSync(__dirname + '/icon/index.ts', iconExports.join('\n'), 'utf-8')
}

const main = () => {
    createIconFolder()
    iconLibrary.forEach((icon) => {
        fs.writeFileSync(__dirname + `/icon/${icon.name}.ts`, JSON.stringify(icon), 'utf-8')
    })

    addIconExport()
}

main()
