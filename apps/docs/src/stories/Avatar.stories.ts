// src/components/Avatar.stories.tsx

import React from 'react'
import { Avatar } from '@squaress/ui/avatar'
import type { Meta, StoryObj } from '@storybook/react'

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        src: {
            control: 'text',
            defaultValue: 'https://via.placeholder.com/150',
        },
        alt: {
            control: 'text',
            defaultValue: 'Avatar',
        },
        variant: {
            control: 'select',
            options: ['circle', 'square'],
            defaultValue: 'circle',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: 'md',
        },
        iconName: {
            control: 'select',
            options: ['plus', 'check', 'cross', 'info'], // Adjust based on your icon library
            defaultValue: '',
        },
    },
} as Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const CircleSmall: Story = {
    args: {
        variant: 'circle',
        size: 'sm',
        src: 'https://via.placeholder.com/150',
        alt: 'Circle Small Avatar',
        iconName: 'Plus',
    },
}

export const CircleMedium: Story = {
    args: {
        variant: 'circle',
        size: 'md',
        src: 'https://via.placeholder.com/150',
        alt: 'Circle Medium Avatar',
        iconName: 'Check',
    },
}

export const CircleLarge: Story = {
    args: {
        variant: 'circle',
        size: 'lg',
        src: 'https://via.placeholder.com/150',
        alt: 'Circle Large Avatar',
        iconName: 'Cross',
    },
}

export const SquareSmall: Story = {
    args: {
        variant: 'square',
        size: 'sm',
        src: 'https://via.placeholder.com/150',
        alt: 'Square Small Avatar',
        iconName: 'Cross',
    },
}

export const SquareMedium: Story = {
    args: {
        variant: 'square',
        size: 'md',
        src: 'https://via.placeholder.com/150',
        alt: 'Square Medium Avatar',
        iconName: 'Plus',
    },
}

export const SquareLarge: Story = {
    args: {
        variant: 'square',
        size: 'lg',
        src: 'https://via.placeholder.com/150',
        alt: 'Square Large Avatar',
        iconName: 'Check',
    },
}
