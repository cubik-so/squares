// src/components/AvatarLabelGroup.stories.tsx

import React from 'react'
import { AvatarLabelGroup } from '@squaress/ui/avatar'
import type { Meta, StoryObj } from '@storybook/react'
import type { AvatarLabelProps, AvatarProps } from '@squaress/ui/avatar'

export default {
    title: 'Components/AvatarLabelGroup',
    component: AvatarLabelGroup,
    argTypes: {
        avatarSrc: {
            control: 'text',
            defaultValue: 'https://via.placeholder.com/150',
        },
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
        title: {
            control: 'text',
            defaultValue: 'John Doe',
        },
        subtitle: {
            control: 'text',
            defaultValue: 'Software Engineer',
        },
        description: {
            control: 'text',
            defaultValue:
                'John is a software engineer with 10 years of experience in full stack development.',
        },
        avatarGroupVariant: {
            control: 'select',
            options: ['circular', 'squared', 'squared-horizontal'],
            defaultValue: 'squared-horizontal',
        },
        className: {
            control: 'text',
            defaultValue: '',
        },
        imageClass: {
            control: 'text',
            defaultValue: '',
        },
    },
} as Meta<AvatarLabelProps>

const avatarList: AvatarProps[] = [
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 1', variant: 'circle', size: 'md' },
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 2', variant: 'circle', size: 'md' },
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 3', variant: 'circle', size: 'md' },
    { src: 'https://via.placeholder.com/150', alt: 'Avatar 4', variant: 'circle', size: 'md' },
]

export const Default: StoryObj<AvatarLabelProps> = {
    args: {
        avatarSrc: 'https://via.placeholder.com/150',
        size: 'md',
        shape: 'circle',
        title: 'John Doe',
        subtitle: 'Software Engineer',
        description:
            'John is a software engineer with 10 years of experience in full stack development.',
    },
}

export const WithAvatarGroup: StoryObj<AvatarLabelProps> = {
    args: {
        avatarSrc: avatarList,
        size: 'md',
        shape: 'square',
        title: 'Project Team',
        subtitle: 'Development Team',
        description: 'This is the development team for the new project.',
        avatarGroupVariant: 'squared-horizontal',
    },
}
