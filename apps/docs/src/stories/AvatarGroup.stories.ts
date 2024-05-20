// src/components/AvatarGroup.stories.tsx

import React from 'react'
import { AvatarGroup } from '@squaress/ui/avatar'
import type { Meta, StoryObj } from '@storybook/react'
import type { AvatarGroupProps, AvatarProps } from '@squaress/ui/avatar'

export default {
    title: 'Components/AvatarGroup',
    component: AvatarGroup,
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
            defaultValue: 'md',
        },
        shape: {
            control: 'select',
            options: ['circle', 'square'],
            defaultValue: 'circle',
        },
        variant: {
            control: 'select',
            options: ['circular', 'squared', 'squared-horizontal'],
            defaultValue: 'circular',
        },
        maxCount: {
            control: 'number',
            defaultValue: 3,
        },
    },
} as Meta<typeof AvatarGroup>

const avatars: AvatarProps[] = [
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 1', variant: 'circle', size: 'md' },
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 2', variant: 'circle', size: 'md' },
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 3', variant: 'circle', size: 'md' },
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 4', variant: 'circle', size: 'md' },
]

type Story = StoryObj<AvatarGroupProps>

export const CircularSmall: Story = {
    args: {
        avatars: avatars,
        size: 'sm',
        shape: 'circle',
        variant: 'circular',
        maxCount: 3,
    },
}

export const CircularMedium: Story = {
    args: {
        avatars: avatars,
        size: 'md',
        shape: 'circle',
        variant: 'circular',
        maxCount: 3,
    },
}

export const CircularLarge: Story = {
    args: {
        avatars: avatars,
        size: 'lg',
        shape: 'circle',
        variant: 'circular',
        maxCount: 3,
    },
}

export const SquaredHorizontal: Story = {
    args: {
        avatars: avatars,
        size: 'md',
        shape: 'square',
        variant: 'squared-horizontal',
        maxCount: 4,
    },
}
