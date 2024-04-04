import { theme } from './src/config/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: theme,
    applyComplexClasses: true,
}

export default config
