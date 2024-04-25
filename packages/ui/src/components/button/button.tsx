'use client'

import { cva } from 'class-variance-authority'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Text } from '@components/text/text'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import LoadingIcon from './loading-icon'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { VariantProps } from 'class-variance-authority'
import type { MotionProps } from 'framer-motion'

/**
 * Button component leveraging advanced CSS handling with `class-variance-authority` for styling
 * and `framer-motion` for animation effects. This component serves as a flexible button
 * with various styles and sizes, optional loading states, and icons.
 *
 * Props:
 * - `variant`: Defines the style of the button based on pre-defined variant classes.
 * - `isLoading`: If true, displays a loading spinner and optional loading text.
 * - `loadingText`: Text to display next to the loading spinner if `isLoading` is true.
 * - `children`: Content to be displayed in the button.
 * - `leftIconName`: Name of the icon to be displayed on the left side of the button content.
 * - `rightIconName`: Name of the icon to be displayed on the right side of the button content.
 * - `size`: Size variant of the button which affects padding and potentially icon sizes.
 * - All other props are spread onto the button element itself.
 *
 * Usage:
 * ```jsx
 * <Button variant="primary" size="lg" isLoading>
 *   Click me
 * </Button>
 * ```
 */
interface ButtonProps
    extends Omit<
            DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
            keyof MotionProps
        >,
        VariantProps<typeof buttonVariants> {
    isLoading?: boolean
    loadingText?: string
    children?: React.ReactNode
    leftIconName?: string
    rightIconName?: string
    className?: string
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
            unStyled: '',
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
    loadingText,
    children,
    leftIconName,
    rightIconName,
    className,
    size = 'md',
    ...props
}: ButtonProps) => {
    const motionSpecificProps: MotionProps = {
        layout: true,
    }
    return (
        <motion.button
            {...motionSpecificProps}
            className={cn(
                'btn-basic',
                buttonVariants({ variant, size }),
                className,
                `${!children ? 'px-[10px] md:px-[12px]' : 'px-[14px] md:px-[16px]'}`,
            )}
            disabled={props.disabled !== undefined ? props.disabled : isLoading}
        >
            {/* Left Icon  */}
            {leftIconName && !isLoading && (
                <Icon
                    color="#000"
                    // color={
                    //     props.disabled
                    //         ? 'button-outline-text-disabled'
                    //         : iconColorVariants({ variant })
                    // }
                    name={leftIconName}
                    {...getIconSize(size)}
                />
            )}

            {/* Loading */}
            {isLoading && (
                <motion.div
                    layout
                    layoutId="loading-spinner"
                    className="flex items-center justify-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 1,
                        }}
                    >
                        <LoadingIcon />
                    </motion.div>
                </motion.div>
            )}

            {/* Button Text */}
            <Text className={buttonVariants({ size })} color="inherit">
                <AnimatePresence initial={true} mode={'wait'}>
                    <motion.div
                        key={loadingText?.toString()}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center justify-center"
                    >
                        {isLoading ? loadingText : children}
                    </motion.div>
                </AnimatePresence>
            </Text>

            {/* Right Icon */}
            {rightIconName && !isLoading && (
                <Icon
                    name={rightIconName}
                    {...getIconSize(size)}
                    color="#000"
                    // color={
                    //     props.disabled
                    //         ? 'var(--button-outline-text-disabled)'
                    //         : iconColorVariants({ variant })
                    // }
                />
            )}
        </motion.button>
    )
}
