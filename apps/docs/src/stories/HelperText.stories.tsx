import React from 'react'
import { HelperText } from '@squaress/ui/helper-text'
import type { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'Components/HelperText',
    component: HelperText,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['default', 'success', 'error'] },
        },
        show: {
            control: { type: 'boolean' },
        },
        children: {
            control: { type: 'text' },
        },
    },
} as Meta<typeof HelperText>

const Template: StoryFn = (args) => <HelperText {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'default',
    show: true,
    children: 'This is a default helper text.',
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    show: true,
    children: 'This is a success helper text.',
}

export const Error = Template.bind({})
Error.args = {
    variant: 'error',
    show: true,
    children: 'This is an error helper text.',
}
