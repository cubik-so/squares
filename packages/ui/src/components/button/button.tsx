import React from 'react'
import { motion } from 'framer-motion'
import type { ForwardRefComponent, HTMLMotionProps } from 'framer-motion'
import type { ClassValue } from 'clsx'

type ButtonVariantType =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'link'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'unStyled'

type ButtonSizeType = '2xl' | 'xl' | 'lg' | 'md' | 'sm'

const baseClass =
    'focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none'

/*
 * Button component variants
 */
const buttonVariants: {
    [key in ButtonVariantType]: ClassValue
} = {
    primary:
        'bg-button-primary-surface-default hover:bg-button-primary-surface-hovered !text-button-primary-text-default hover:!text-button-primary-text-hovered !stroke-button-primary-text-default hover:!stroke-button-primary-text-hovered  focus:!text-button-primary-text-focused disabled:bg-button-primary-surface-disabled disabled:!text-button-primary-text-disabled disabled:!stroke-button-primary-text-disabled disabled:cursor-not-allowed  l2-heavy',

    secondary:
        'bg-button-secondary-surface-default hover:bg-button-secondary-surface-hovered !text-button-secondary-text-default hover:!text-button-secondary-text-hovered !stroke-button-secondary-text-default hover:!stroke-button-secondary-text-hovered focus:border-2 focus:border-button-secondary-border-focused focus:!text-button-secondary-text-focused disabled:cursor-not-allowed  stroke-button-secondary-text-default',

    outline:
        'bg-button-secondary-outline-default border border-button-outline-border-default hover:bg-button-outline-surface-hovered !text-button-outline-text-default hover:!text-button-outline-text-hovered !stroke-button-outline-text-default hover:!stroke-button-outline-text-hovered focus-visible:border focus-visible:border-button-outline-border-default focus:!text-button-outline-text-focused disabled:bg-button-outline-surface-disabled disabled:!text-button-outline-text-disabled disabled:!stroke-button-outline-text-disabled disabled:cursor-not-allowed  !text-button-outline-text-default',

    link: 'bg-transparent hover:bg-transparent underline underline-offset-4 decoration-button-link-text-default !text-button-link-text-default hover:!text-button-link-text-hovered !stroke-button-link-text-default hover:!stroke-button-link-text-hovered disabled:bg-button-link-surface-disabled disabled:!text-button-link-text-disabled disabled:!stroke-button-link-text-disabled disabled:cursor-not-allowed ',

    tertiary:
        'bg-transparent hover:bg-transparent !text-color-fg-primary-subdued hover:!text-button-link-text-hovered !stroke-button-link-text-default hover:!stroke-button-link-text-hovered focus:!text-button-link-text-focused disabled:bg-button-link-surface-disabled disabled:!text-button-link-text-disabled disabled:!stroke-button-link-text-disabled disabled:cursor-not-allowed ',

    danger: 'bg-button-danger-surface-default hover:bg-button-danger-surface-hovered !text-button-danger-text-default hover:!text-button-danger-text-hovered !stroke-button-danger-text-default hover:!stroke-button-danger-text-hovered focus:border-2 focus:border-button-danger-border-focused focus:!text-button-danger-text-focused disabled:bg-button-danger-surface-disabled disabled:!text-button-danger-text-disabled disabled:!stroke-button-danger-text-disabled disabled:cursor-not-allowed !text-button-danger-text-default',

    success:
        'bg-button-success-surface-default hover:bg-button-success-surface-hovered !text-button-success-text-default hover:!text-button-success-text-hovered !stroke-button-success-text-default hover:!stroke-button-success-text-hovered focus:border-2 focus:border-button-success-border-focused focus:!text-button-success-text-focused disabled:bg-button-success-surface-disabled disabled:!text-button-success-text-disabled disabled:!stroke-button-success-text-disabled disabled:cursor-not-allowed !text-button-success-text-default',

    unStyled: '',
}

/*
 * Button component size variants
 */
const buttonSizeVariants: {
    [key in ButtonSizeType]: string
} = {
    '2xl': 'h-11 md:h-12',
    xl: 'h-[38px] md:h-12',
    lg: 'h-9 md:h-11',
    md: 'h-8 md:h-10',
    sm: 'h-7 md:h-9',
}

/*
 * Button icon color variants
 */
const buttonIconColorVariants: {
    [key in ButtonVariantType]: string
} = {
    primary: 'var(--button-primary-text-default)',
    secondary: 'var(--button-secondary-text-default)',
    outline: 'var(--button-outline-text-default)',
    link: 'var(--button-link-text-default)',
    tertiary: 'var(--button-link-text-default)',
    danger: 'var(--button-danger-text-default)',
    success: 'var(--button-success-text-default)',
    unStyled: 'inherit',
}

/*
 * Button text color variants
 */
const buttonTextVariants: {
    [key in ButtonSizeType]: string
} = { '2xl': 'b1 md:l1', xl: 'b2 md:l2', lg: 'b3 md:l2', md: 'l1 md:l2', sm: 'l2 md:l3' }

interface ButtonProps extends ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'button'>> {
    variant?: ButtonVariantType
    size?: ButtonSizeType
    loading?: boolean
}

// todo - missing loading state, children, and other conditions
export const Button = ({ variant, size, loading, ...props }: ButtonProps) => {
    const isDisabled = loading || props.defaultProps?.disabled
    return (
        <motion.button {...props} disabled={isDisabled}>
            Button
        </motion.button>
    )
}
