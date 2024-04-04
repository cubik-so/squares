import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { Text } from '@components/text/text'
import { cn } from '@utils/cn'
import Icon from '../../icons'
import type { ClassValue } from 'clsx'
import type { ModalSizeType } from './modal'

const HeaderTitleVariants: {
    [key in ModalSizeType]: string
} = {
    sm: 'b4-heavy',
    md: 'h4 md:h6',
    lg: 'h4 md:h5',
    xl: 'h4 md:h5',
}

const HeaderContainerVariants: { [key in ModalSizeType]: string } = {
    sm: 'h-[32px] md:h-[40px] px-[16px]',
    md: 'h-[44px] md:h-[48px] px-[16px] md:px-[24px]',
    lg: 'h-[48px] md:h-[64px] px-[24px]',
    xl: 'h-[48px] md:h-[64px] px-[24px]',
}

interface Props {
    heading: string
    onClose: () => void
    background: string
    className: ClassValue
    size: ModalSizeType
    children: React.ReactNode
}
export const ModalHeader = ({ size, className, background, heading, children, onClose }: Props) => {
    return (
        <Dialog.Title
            className={cn(
                className,
                HeaderTitleVariants[size || 'lg'],
                background ? 'bg-modal-header-surface' : background,
            )}
        >
            {/* <Text variant="">{heading ? heading : ''}</Text> */}
            {children}
            <motion.button
                whileHover={{ scale: 1.2 }}
                className="pointer-events-auto"
                onClick={onClose}
            >
                {/*
        <Icon name="cross" width={20} height={20} />
                 */}
            </motion.button>
        </Dialog.Title>
    )
}
