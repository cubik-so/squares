import type { Config } from 'tailwindcss'
import { CustomThemeConfig } from 'tailwindcss/types/config'

export const theme: Partial<
    CustomThemeConfig & {
        extend: Partial<CustomThemeConfig>
    }
> = {}

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme,
    darkMode: 'class',
}

export default config
