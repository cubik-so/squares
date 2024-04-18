import React, { createContext, useContext, useMemo } from 'react'

import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'
import { v4 as uuid_v4 } from 'uuid'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import { Text } from '../text/text'

interface SegmentContainerProps {
    children: React.ReactNode
    size: 'sm' | 'md' | 'lg'
}
interface SegmentItemProps {
    children?: React.ReactNode
    onClick?: () => void
    isActive?: boolean
    href?: string
    className?: string
    icon?: string
}

const SizeContext = createContext<{ size: 'sm' | 'md' | 'lg'; id: string }>({
    size: 'md',
    id: 'segment',
})

const segmentTextVariant = cva('whitespace-nowrap', {
    variants: {
        size: {
            sm: 'l2 md:l3',
            md: 'l2 md:l2',
            lg: 'l1 md:l1',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})
const segmentContainerVariant = cva('', {
    variants: {
        size: {
            sm: 'min-h-[36px] rounded-lg',
            md: 'min-h-[40px] rounded-lg',
            lg: 'min-h-[44px] rounded-[10px]',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})
const segmentItemVariant = cva('', {
    variants: {
        size: {
            sm: 'px-2 md:px-6 py-1 md:py-2 min-h-[28px] rounded-[6px]',
            md: 'px-4 md:px-6 py-1 md:py-2 min-h-[32px] rounded-[6px]',
            lg: 'px-4 md:px-6 py-1 md:py-2 min-h-[36px] rounded-[8px]',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

export const SegmentContainer = ({ children, size }: SegmentContainerProps) => {
    const id = useMemo(() => uuid_v4(), [])
    return (
        <SizeContext.Provider value={{ size, id }}>
            <div
                className={cn(
                    segmentContainerVariant({ size }),
                    'bg-segment-control-surface-inactive w-[content] p-1 gap-1 flex justify-center items-center',
                )}
            >
                {children}
            </div>
        </SizeContext.Provider>
    )
}

export const SegmentItem = ({
    children,
    onClick,
    isActive,
    href,
    className,
    icon,
}: SegmentItemProps) => {
    const { size, id } = useContext(SizeContext)
    const isMobile = useMediaQuery('(max-width: 768px)')
    const content = (
        <Text
            className={cn(segmentTextVariant({ size }))}
            color={isActive ? 'primary' : 'tertiary'}
        >
            {children}
        </Text>
    )

    let iconSize
    if (size === 'sm') {
        iconSize = isMobile ? 12 : 18
    } else if (size === 'md') {
        iconSize = isMobile ? 20 : 24
    }

    return href ? (
        <a
            href={href}
            className={cn(
                segmentItemVariant({ size }),
                'relative transition-all px-6 py-2 w-full flex items-center justify-center gap-2 cursor-pointer text-center',
            )}
        >
            {isActive && (
                <motion.div
                    layoutId={id}
                    transition={{ type: 'spring', bounce: 0.1, duration: 0.05 }}
                    className={cn(
                        ' bg-segment-control-surface-active z-0 shadow-md absolute inset-0 w-full rounded-lg',
                        className,
                    )}
                />
            )}
            <span className="relative z-0 ">
                {icon && (
                    <Icon
                        color={
                            isActive ? 'segment-control-fg-active' : 'segment-control-fg-inactive'
                        }
                        strokeWidth={2}
                        width={iconSize}
                        height={iconSize}
                        name={icon}
                    />
                )}
                {children && content}
            </span>
        </a>
    ) : (
        <motion.div
            onClick={onClick}
            className={cn(
                'relative transition-all w-full h-full flex items-center justify-center gap-2 cursor-pointer text-center rounded-lg',
                segmentItemVariant({ size }),
            )}
        >
            {isActive && (
                <motion.div
                    layoutId={id}
                    transition={{ type: 'spring', bounce: 0.1, duration: 0.35 }}
                    className={cn(
                        'bg-segment-control-surface-active shadow-md absolute inset-0 w-full  rounded-lg',
                        className,
                    )}
                />
            )}
            <span className="relative z-1">
                {icon && (
                    <Icon
                        color={
                            isActive ? 'segment-control-fg-active' : 'segment-control-fg-inactive'
                        }
                        strokeWidth={2}
                        width={iconSize}
                        height={iconSize}
                        name={icon}
                    />
                )}
                {children && content}
            </span>
        </motion.div>
    )
}
