// src/stories/Alert.stories.tsx

import React from 'react'
import { Alert } from '@squaress/ui/alert'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['default', 'textOnly', 'leftOutline', 'border'],
            },
        },
        state: {
            control: {
                type: 'select',
                options: ['default', 'success', 'info', 'warning', 'error', 'innovative'],
            },
        },
        title: {
            control: 'text',
        },
        description: {
            control: 'text',
        },
        // iconName: {
        //     control: {
        //         type: 'select',
        //         options: Object.keys(IconName), // Assuming IconName is an enum or object with icon names
        //     },
        // },
        children: {
            control: 'text',
        },
        className: {
            control: 'text',
        },
    },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
    args: {
        variant: 'default',
        state: 'default',
        title: 'Default Alert',
        description: 'This is a default alert',
    },
}

export const Success: Story = {
    args: {
        variant: 'default',
        state: 'success',
        title: 'Success Alert',
        description: 'This is a success alert',
        iconName: 'check_circle', // Adjust as per your icon set
    },
}

export const Info: Story = {
    args: {
        variant: 'default',
        state: 'info',
        title: 'Info Alert',
        description: 'This is an info alert',
        iconName: 'info', // Adjust as per your icon set
    },
}

export const Warning: Story = {
    args: {
        variant: 'default',
        state: 'warning',
        title: 'Warning Alert',
        description: 'This is a warning alert',
        iconName: 'warning', // Adjust as per your icon set
    },
}

export const Error: Story = {
    args: {
        variant: 'default',
        state: 'error',
        title: 'Error Alert',
        description: 'This is an error alert',
        iconName: 'error', // Adjust as per your icon set
    },
}

export const Innovative: Story = {
    args: {
        variant: 'default',
        state: 'innovative',
        title: 'Innovative Alert',
        description: 'This is an innovative alert',
        iconName: 'lightbulb', // Adjust as per your icon set
    },
}

export const Custom: Story = {
    args: {
        variant: 'border',
        state: 'success',
        title: 'Custom Alert',
        description: 'This is a custom alert with additional content',
        iconName: 'check_circle',
        children: 'Additional custom content can go here.',
    },
    argTypes: {
        onClick: { action: 'clicked' },
    },
}
