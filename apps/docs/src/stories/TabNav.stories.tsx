import React from 'react'
import { TabNavLink, TabNavRoot } from '@squaress/ui/tab-nav'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TabNavRoot> = {
    title: 'Components/TabNav',
    component: TabNavRoot,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<{
    rootProps: React.ComponentProps<typeof TabNavRoot>
    linkProps: React.ComponentProps<typeof TabNavLink>[]
}>

const Template: React.FC<{
    rootProps: React.ComponentProps<typeof TabNavRoot>
    linkProps: React.ComponentProps<typeof TabNavLink>[]
}> = ({ rootProps, linkProps }) => (
    <TabNavRoot {...rootProps}>
        {linkProps.map((props, index) => (
            <TabNavLink key={index} {...props} />
        ))}
    </TabNavRoot>
)

export const Default: Story = {
    render: (args) => <Template {...args} />,
    args: {
        // rootProps: {},
        linkProps: [
            { linkHref: '#', tabName: 'Home', asChild: false },
            { linkHref: '#', tabName: 'Account', asChild: false },
            { linkHref: '#', tabName: 'Settings', asChild: false },
        ],
    },
}

export const WithActiveLink: Story = {
    render: (args) => <Template {...args} />,
    args: {
        // rootProps: {},
        linkProps: [
            { linkHref: '/home', tabName: 'Home', asChild: true },
            { linkHref: '/account', tabName: 'Account', asChild: true },
            { linkHref: '/settings', tabName: 'Settings', asChild: true },
        ],
    },
}
