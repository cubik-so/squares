import * as fs from 'fs'

interface CustomThemeConfig {
    colors?: Record<string, string | Record<string, string>>
    // Add other properties if needed
}

const parseCss = (filePath: string): Record<string, string> => {
    try {
        const cssContent = fs.readFileSync(filePath, 'utf-8').split(':root ')[1]
        if (!cssContent) {
            throw new Error('No CSS content found')
        }
        console.log(cssContent, 'cssContent')
        const matches = Array.from(cssContent.matchAll(/--[\w-]+:\s*var\(--[\w-]+\);/g))

        const colors: Record<string, string> = {}
        for (const match of matches) {
            const [declaration] = match
            const [variable] = declaration.split(': ')
            if (!variable) {
                continue
            }
            const name = variable.trim().replace('--', '')
            colors[name] = `var(variable)`
        }
        console.log(colors, 'colors')
        return colors
    } catch (error) {
        const e = error as Error
        console.error(`Error reading CSS file ${filePath}: ${e.message}`)
        process.exit(1) // Exit with error
    }
}

const generateThemeExtension = (colors: Record<string, string>): string => {
    let themeExtension = `import type { CustomThemeConfig } from "tailwindcss/types/config"

export const theme: Partial<CustomThemeConfig & { extend: Partial<CustomThemeConfig> }> = {
\n`
    themeExtension += '  extend: {\n'
    themeExtension += '    colors: {\n'
    for (const [name, value] of Object.entries(colors)) {
        themeExtension += `      '${name}': '${value}',\n`
    }
    themeExtension += '    },\n'
    themeExtension += '  },\n'
    themeExtension += '}\n'
    return themeExtension
}

const main = () => {
    const lightColors = parseCss(__dirname + '/../styles/light-colors.css')
    const componentColors = parseCss(__dirname + '/../styles/component-colors.css')
    const allColors = { ...lightColors, ...componentColors }
    const themeContent = generateThemeExtension(allColors)

    fs.writeFileSync(__dirname + '/../config/theme.ts', themeContent, 'utf-8')
}

main()
