import { theme } from '@squares/ui/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@squares/ui/**/*.{js,jsx,ts,tsx}',
    ],
    theme: theme,
    plugins: [],
}
export default config
