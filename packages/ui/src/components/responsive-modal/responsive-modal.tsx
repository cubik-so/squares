import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import {
    VaulDrawer,
    VaulDrawerContent,
    VaulDrawerOverlay,
    VaulDrawerPortal,
} from '../drawer/drawer'
import { Modal } from '../modal/index'

export interface ResponsiveModalProps {
    children?: React.ReactNode
    open: boolean
    onOpenChange?: (open: boolean) => void
    dialogSize?: 'sm' | 'md' | 'xl' | 'lg'
    onClose: () => void
}

export const ResponsiveModal = ({
    children,
    open,
    onOpenChange,
    dialogSize = 'sm',
    onClose,
}: ResponsiveModalProps) => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
    return (
        <>
            {isSmallDevice ? (
                <VaulDrawer open={open} onOpenChange={onOpenChange}>
                    <VaulDrawerPortal>
                        <VaulDrawerOverlay />
                        <VaulDrawerContent>{children}</VaulDrawerContent>
                    </VaulDrawerPortal>
                </VaulDrawer>
            ) : (
                <Modal open={open} onClose={onClose} dialogSize={dialogSize}>
                    {children}
                </Modal>
            )}
        </>
    )
}
