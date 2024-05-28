// src/ToggleSwitch.stories.tsx

import React from 'react'
import { ToggleSwitch } from '@squaress/ui/toogle-switch'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ToggleSwitch> = {
    title: 'Components/ToggleSwitch',
    component: ToggleSwitch,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['sm', 'md'],
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'extended'],
        },
        defaultChecked: {
            control: 'boolean',
        },
        onChange: { action: 'changed' },
    },
}

export default meta

type Story = StoryObj<typeof ToggleSwitch>

export const Default: Story = {
    args: {
        size: 'md',
        variant: 'default',
        defaultChecked: false,
        children: 'Default Toggle',
    },
}

export const Small: Story = {
    args: {
        size: 'sm',
        variant: 'default',
        defaultChecked: false,
        children: 'Small Toggle',
    },
}

export const Extended: Story = {
    args: {
        size: 'md',
        variant: 'extended',
        defaultChecked: false,
        children: 'Extended Toggle',
    },
}

export const Checked: Story = {
    args: {
        size: 'md',
        variant: 'default',
        defaultChecked: true,
        children: 'Checked Toggle',
    },
}
