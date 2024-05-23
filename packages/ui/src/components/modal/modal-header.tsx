import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@utils/cn'
import Icon from '@/icons'
import { Text } from '../text/text'
import type { DialogSize } from './modal'

const ModalTitleVariants = cva('text-[var(--avatar-label-title)]', {
    variants: {
        size: {
            sm: 'b4-heavy',
            md: 'h4 md:h6',
            lg: 'h4 md:h5',
            xl: 'h4 md:h5',
        },
    },
    defaultVariants: {
        size: 'lg',
    },
})
// this will always be hidden on mobile because we are not showing cross icon on mobile
const ModalTitleContainerVariants = cva(
    'pointer-events-auto hidden md:flex justify-between items-center',
    {
        variants: {
            size: {
                sm: 'h-[32px] md:h-[40px]',
                md: 'h-[44px] md:h-[48px]',
                lg: 'h-[48px] md:h-[64px]',
                xl: 'h-[48px] md:h-[64px]',
            },
        },
        defaultVariants: {
            size: 'lg',
        },
    },
)

interface Props {
    heading?: string
    children?: JSX.Element
    size?: keyof typeof DialogSize
    onClose?: () => void
    background?: boolean
    className?: string
    closeIcon?: boolean
}
export const ModalHeader = ({
    heading,
    size,
    className,
    background,
    onClose,
    children,
    closeIcon = true,
}: Props) => {
    return (
        <>
            <Dialog.Title
                className={cn(
                    className,
                    background ? 'var(--modal-header-surface)' : background,
                    ModalTitleContainerVariants({ size }),
                )}
            >
                <Text className={cn(ModalTitleVariants({ size }))}>{heading ? heading : ''}</Text>
                {children}
                {closeIcon && (
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        className="pointer-events-auto"
                        onClick={onClose}
                    >
                        <Icon
                            name="cross"
                            width={20}
                            color="var(--modal-header-cancel-icon)"
                            height={20}
                        />
                    </motion.button>
                )}
            </Dialog.Title>
        </>
    )
}
