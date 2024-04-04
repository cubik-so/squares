'use client'

import { cva } from 'class-variance-authority'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Text } from '@components/text/text'
import { cn } from '@utils/cn'
import type { VariantProps } from 'class-variance-authority'

interface ButtonProps
    extends React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        VariantProps<typeof buttonVariants> {
    isLoading?: boolean
    LoadingText?: string
    children?: React.ReactNode
    leftIconName?: string
    rightIconName?: string
}

const buttonVariants = cva('flex items-center justify-center', {
    variants: {
        variant: {
            primary:
                'bg-button-primary-surface-default text-button-primary-text-default hover:bg-button-primary-surface-hovered hover:!text-button-primary-text-hovered disabled:bg-button-primary-surface-disabled disabled:!text-button-primary-text-disabled',
            secondary:
                'bg-button-secondary-surface-default text-button-secondary-text-default hover:bg-button-secondary-surface-hovered hover:!text-button-secondary-text-hovered disabled:bg-button-secondary-surface-disabled disabled:!text-button-secondary-text-disabled',
            outline:
                'bg-button-outline-surface-default text-button-outline-text-default border border-button-outline-border-default hover:bg-button-outline-surface-hovered hover:!text-button-outline-text-hovered disabled:bg-button-outline-surface-disabled disabled:!text-button-outline-text-disabled',
            link: 'bg-button-link-surface-default text-button-link-text-default underline underline-offset-4 decoration-button-link-text-default hover:bg-button-link-surface-hovered hover:!text-button-link-text-hovered hover:decoration-button-link-text-hovered disabled:bg-button-link-surface-disabled disabled:!text-button-link-text-disabled',
            tertiary:
                'bg-button-tertiary-surface-default text-button-tertiary-text-default hover:bg-button-tertiary-surface-hovered hover:!text-button-tertiary-text-hovered disabled:bg-button-tertiary-surface-disabled disabled:!text-button-tertiary-text-disabled',
            danger: 'bg-button-danger-surface-default text-button-danger-text-default hover:bg-button-danger-surface-hovered hover:!text-button-danger-text-hovered disabled:bg-button-danger-surface-disabled disabled:!text-button-danger-text-disabled',
            success:
                'bg-button-success-surface-default text-button-success-text-default hover:bg-button-success-surface-hovered hover:!text-button-success-text-hovered disabled:bg-button-success-surface-disabled disabled:!text-button-success-text-disabled',
        },
        size: {
            '2xl': 'b1 md:l1 h-11 md:h-12',
            xl: 'b2 md:l2 h-[38px] md:h-12',
            lg: 'b3 md:l2 h-9 md:h-11',
            md: 'l1 md:l2 h-8 md:h-10',
            sm: 'l2 md:l3 h-7 md:h-9',
        },
    },
})
const iconColorVariants = cva('', {
    variants: {
        variant: {
            primary: 'button-primary-text-default',
            secondary: 'button-secondary-text-default',
            outline: 'button-outline-text-default',
            link: 'button-link-text-default',
            tertiary: 'button-link-text-default',
            danger: 'button-danger-text-default',
            success: 'button-success-text-default',
            unStyled: 'inherit',
        },
    },
})

const getIconSize = (size: string | null | undefined) => {
    switch (size) {
        case '2xl':
            return { height: 20, width: 20, strokeWidth: 2.5 }
        case 'xl':
            return { height: 20, width: 20, strokeWidth: 2.3 }
        case 'lg':
            return { height: 18, width: 18, strokeWidth: 2.2 }
        case 'md':
            return { height: 16, width: 16, strokeWidth: 2 }
        case 'sm':
            return { height: 14, width: 14, strokeWidth: 1.8 }
        default:
            return { height: 16, width: 16, strokeWidth: 2 } // Default size
    }
}

export const Button = ({
    variant = 'primary',
    isLoading,
    LoadingText,
    children,
    leftIconName,
    size = 'md',
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                'btn-basic',
                buttonVariants({ variant, size }),
                `${!children ? 'px-[10px] md:px-[12px]' : 'px-[14px] md:px-[16px]'}`,
            )}
        >
            {/* {leftIconName && (
                <Icon
                    color={
                        props.disabled
                            ? 'var(--button-outline-text-disabled)'
                            : iconColorVariants({ variant })
                    }
                    name={leftIconName}
                    // {...getIconSize(size)}
                    //  className={'lr-1'}
                />
            )} */}
            <Text className={buttonVariants({ size })} color="inherit">
                <AnimatePresence initial={true} mode={'wait'}>
                    <motion.div
                        key={LoadingText?.toString()}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center"
                    >
                        {isLoading ? LoadingText : children}
                    </motion.div>
                </AnimatePresence>
            </Text>
        </button>
    )
}
