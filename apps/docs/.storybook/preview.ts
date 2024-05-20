import type { Preview } from '@storybook/react'

const preview: Preview = {
    globalTypes: {
        darkMode: {
            defaultValue: true, // Enable dark mode by default on all stories
        },
    },

    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
