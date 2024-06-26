import { EmptyState } from '@squaress/ui/empty-state'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EmptyState> = {
    title: 'Components/EmptyState',
    component: EmptyState,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        icon: { control: 'text' },
        iconColor: { control: 'color' },
        border: { control: 'boolean' },
        bgColor: { control: 'color' },
        className: { control: 'text' },
    },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
    args: {
        title: 'No items found',
        description: "Try adjusting your search or filter to find what you're looking for.",
        icon: 'search',
        iconColor: 'var(--color-fg-negative-base)',
        border: true,
        bgColor: 'var(--color-surface-negative-transparent)',
        className: '',
    },
}

export const WithCustomColors: Story = {
    args: {
        ...Default.args,
        iconColor: '#4CAF50',
        bgColor: '#E8F5E9',
    },
}

// export const WithChildren: Story = {
//   args: {
//     title: Default.args.title,
//     description: Default.args.description,
//     icon: Default.args.icon,
//     iconColor: Default.args.iconColor,
//     border: Default.args.border,
//     bgColor: Default.args.bgColor,
//     className: Default.args.className,
//     children: <button>Add Item</button>
//   },
// };

export const WithCustomClassName: Story = {
    args: {
        ...Default.args,
        className: 'custom-empty-state',
    },
}

export const MobileView: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
}

export const TabletView: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        viewport: {
            defaultViewport: 'tablet',
        },
    },
}
