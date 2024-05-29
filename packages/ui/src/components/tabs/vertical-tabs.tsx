import React from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import type { ReactNode } from 'react'

interface TabsProps {
    children: ReactNode
    defaultValue: string
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
    className?: string
}

type TabListProps = {
    children: ReactNode
    className?: string
}

export type TabProps = {
    children: ReactNode
    value: string
    className?: string
    leftIconName?: string
}

type TabPanelsProps = {
    children: ReactNode
    className?: string
}

type TabPanelProps = {
    children: ReactNode
    value: string
    className?: string
}

export const VerticalTabs = ({ children, defaultValue, className }: TabsProps) => (
    <RadixTabs.Root
        defaultValue={defaultValue}
        orientation="vertical"
        className={cn('flex h-full w-full pointer-events-auto', className)}
    >
        {children}
    </RadixTabs.Root>
)

export const VerticalTabList: React.FC<TabListProps> = ({ children, className }) => (
    <RadixTabs.List className={cn('shrink-0 flex flex-col gap-2 px-6 w-[265px]', className)}>
        {children}
    </RadixTabs.List>
)

export const VerticalTab = ({ children, value, className, leftIconName }: TabProps) => {
    return (
        <RadixTabs.Trigger
            value={value}
            className={cn(
                'flex items-center justify-start leading-none select-none rounded-lg p-2 bg-menu-list-item-surface-default text-menu-list-item-fg-default data-[state=active]:bg-menu-list-item-surface-hovered data-[state=active]:text-menu-list-item-fg-hovered stroke-menu-list-item-icon data-[state=active]:stroke-menu-list-item-fg-hovered data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-pointer ',
                className,
            )}
        >
            <div className="flex gap-[10px] items-center ">
                {leftIconName && (
                    <Icon name={leftIconName} height={20} width={20} className="stroke-inherit" />
                )}
                {children}
            </div>
        </RadixTabs.Trigger>
    )
}

export const VerticalTabPanels = ({ children, className }: TabPanelsProps) => (
    <div className={cn('w-full h-full', className)}>{children}</div>
)

export const VerticalTabPanel = ({ children, value, className }: TabPanelProps) => (
    <RadixTabs.Content
        value={value}
        className={cn(
            'grow p-3 2xl:p-5 bg-modal-body-surface outline-none w-full h-full',
            className,
        )}
    >
        {children}
    </RadixTabs.Content>
)
