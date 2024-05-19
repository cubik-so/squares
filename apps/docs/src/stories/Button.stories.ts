import { Button } from '@squaress/ui/button'
import type { Meta, StoryObj } from '@storybook/react'
import '@squaress/ui/styles.css'

const meta = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'outline',
                    'link',
                    'tertiary',
                    'danger',
                    'success',
                    'unStyled',
                ],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['2xl', 'xl', 'lg', 'md', 'sm'],
            },
        },
        isLoading: { control: 'boolean' },
        loadingText: { control: 'text' },
        leftIconName: { control: 'text' },
        rightIconName: { control: 'text' },
        children: { control: 'text' },
        className: { control: 'text' },
        onClick: { action: 'clicked' },
    },
} as Meta
export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary Button',
        isLoading: false,
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Secondary Button',
        isLoading: false,
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'md',
        children: 'Outline Button',
        isLoading: false,
    },
}

export const Link: Story = {
    args: {
        variant: 'link',
        size: 'md',
        children: 'Link Button',
        isLoading: false,
    },
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        size: 'md',
        children: 'Tertiary Button',
        isLoading: false,
    },
}

export const Danger: Story = {
    args: {
        variant: 'danger',
        size: 'md',
        children: 'Danger Button',
        isLoading: false,
    },
}

export const Success: Story = {
    args: {
        variant: 'success',
        size: 'md',
        children: 'Success Button',
        isLoading: false,
    },
}

export const WithLoading: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'With Loading',
        isLoading: true,
        loadingText: 'Loading...',
    },
}

export const WithLeftIcon: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'With Left Icon',
        leftIconName: 'left-icon',
    },
}

export const WithRightIcon: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'With Right Icon',
        rightIconName: 'right-icon',
    },
}

export const CustomClassName: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Custom Class',
        className: 'custom-class-name',
    },
}
