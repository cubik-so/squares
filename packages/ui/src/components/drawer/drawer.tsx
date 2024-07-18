import React from 'react'
import { Drawer } from 'vaul'
import { cn } from '@utils/cn'
import type { ClassValue } from 'clsx'

interface VaulDrawerTriggerProps {
    children: React.ReactNode
}

export const VaulDrawerTrigger = ({ children }: VaulDrawerTriggerProps) => {
    return <Drawer.Trigger>{children}</Drawer.Trigger>
}

interface DrawerPortalProps {
    children: React.ReactNode
}

export const VaulDrawerPortal = ({ children }: DrawerPortalProps) => {
    return (
        <Drawer.Portal container={document.getElementById('drawer-portal')}>
            {children}
        </Drawer.Portal>
    )
}

export const VaulDrawerOverlay = ({ className }: { className?: ClassValue }) => (
    <Drawer.Overlay
        className={cn(
            'mouse-event-auto fixed inset-0 bg-[#48484825] dark:bg-[#27272705] backdrop-blur-[4px]',
            className,
        )}
    />
)

interface DrawerContentProps {
    children: React.ReactNode
    className?: ClassValue
}

export const VaulDrawerContent = ({ children, className }: DrawerContentProps) => {
    return (
        <Drawer.Content
            className={cn(
                'fixed bg-color-surface-primary shadow-2xl dark:shadow-black pt-2 focus:outline-none',
                'top-0 bottom-0 right-0 w-[640px] max-w-[100%] rounded-l-[12px]',
                className,
            )}
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <div className="bg-color-surface-primary mx-auto mb-2 h-[3px] w-12 shrink-0 rounded-full" />
            <div style={{ flexGrow: 1, overflowY: 'auto' }}>{children}</div>
        </Drawer.Content>
    )
}

export interface VaulDrawerProps {
    activeSnapPoint?: number | string | null
    setActiveSnapPoint?: (snapPoint: number | string | null) => void
    children?: React.ReactNode
    open?: boolean
    closeThreshold?: number
    onOpenChange?: (open: boolean) => void
    shouldScaleBackground?: boolean
    scrollLockTimeout?: number
    fixed?: boolean
    dismissible?: boolean
    onDrag?: (event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => void
    onRelease?: (event: React.PointerEvent<HTMLDivElement>, open: boolean) => void
    modal?: boolean
    direction?: 'top' | 'right' | 'bottom' | 'left'
    nested?: boolean
    onClose?: () => void
}

export const VaulDrawer = ({ children, open, onOpenChange, ...props }: VaulDrawerProps) => {
    return (
        <Drawer.Root open={open} onOpenChange={onOpenChange} {...props}>
            {children}
        </Drawer.Root>
    )
}
