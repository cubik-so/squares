import { cva } from 'class-variance-authority'
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

/*
 * Button component variants
 */
const buttonVariants: {
    [key in ButtonVariantType]: ClassValue
} = {
    primary:
        'bg-[var(--button-primary-surface-default)]  hover:bg-[var(--button-primary-surface-hovered)] !text-[var(--button-primary-text-default)] hover:!text-[var(--button-primary-text-hovered)] !stroke-[var(--button-primary-text-default)] hover:!stroke-[var(--button-primary-text-hovered)]  focus:!text-[var(--button-primary-text-focused)] disabled:bg-[var(--button-primary-surface-disabled)] disabled:!text-[var(--button-primary-text-disabled)] disabled:!stroke-[var(--button-primary-text-disabled)] disabled:cursor-not-allowed  focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none l2-heavy',
    secondary:
        'bg-[var(--button-secondary-surface-default)] hover:bg-[var(--button-secondary-surface-hovered)] !text-[var(--button-secondary-text-default)] hover:!text-[var(--button-secondary-text-hovered)] !stroke-[var(--button-secondary-text-default)] hover:!stroke-[var(--button-secondary-text-hovered)] focus:border-2 focus:border-[var(--button-secondary-border-focused)] focus:!text-[var(--button-secondary-text-focused)] disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none stroke-[var(--button-secondary-text-default)]',
    outline:
        'bg-[var(--button-secondary-outline-default)] border border-[var(--button-outline-border-default)] hover:bg-[var(--button-outline-surface-hovered)] !text-[var(--button-outline-text-default)] hover:!text-[var(--button-outline-text-hovered)] !stroke-[var(--button-outline-text-default)] hover:!stroke-[var(--button-outline-text-hovered)] focus-visible:outline-none focus-visible:border focus-visible:border-[var(--button-outline-border-default)] focus:!text-[var(--button-outline-text-focused)] disabled:bg-[var(--button-outline-surface-disabled)] disabled:!text-[var(--button-outline-text-disabled)] disabled:!stroke-[var(--button-outline-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none stroke-[var(--button-outline-text-default)] !text-[var(--button-outline-text-default)] ',

    link: 'bg-transparent hover:bg-transparent underline underline-offset-4 decoration-[var(--button-link-text-default)] !text-[var(--button-link-text-default)] hover:!text-[var(--button-link-text-hovered)]!stroke-[var(--button-link-text-default)] hover:!stroke-[var(--button-link-text-hovered)] disabled:bg-[var(--button-link-surface-disabled)] disabled:!text-[var(--button-link-text-disabled)] disabled:!stroke-[var(--button-link-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',

    tertiary:
        'bg-transparent hover:bg-transparent !text-[var(--color-fg-primary-subdued)] hover:!text-[var(--button-link-text-hovered)] !stroke-[var(--button-link-text-default)] hover:!stroke-[var(--button-link-text-hovered)] focus:!text-[var(--button-link-text-focused)] disabled:bg-[var(--button-link-surface-disabled)] disabled:!text-[var(--button-link-text-disabled)] disabled:!stroke-[var(--button-link-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none stroke-[var(--button-link-text-default)] !text-[var(--button-link-text-default)]',

    danger: 'bg-[var(--button-danger-surface-default)] hover:bg-[var(--button-danger-surface-hovered)] !text-[var(--button-danger-text-default)] hover:!text-[var(--button-danger-text-hovered)] !stroke-[var(--button-danger-text-default)] hover:!stroke-[var(--button-danger-text-hovered)] focus:border-2 focus:border-[var(--button-danger-border-focused)] focus:!text-[var(--button-danger-text-focused)] disabled:bg-[var(--button-danger-surface-disabled)] disabled:!text-[var(--button-danger-text-disabled)] disabled:!stroke-[var(--button-danger-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none stroke-[var(--button-danger-text-default)] !text-[var(--button-danger-text-default)]',

    success:
        'bg-[var(--button-success-surface-default)] hover:bg-[var(--button-success-surface-hovered)] !text-[var(--button-success-text-default)] hover:!text-[var(--button-success-text-hovered)] !stroke-[var(--button-success-text-default)] hover:!stroke-[var(--button-success-text-hovered)] focus:border-2 focus:border-[var(--button-success-border-focused)] focus:!text-[var(--button-success-text-focused)] disabled:bg-[var(--button-success-surface-disabled)] disabled:!text-[var(--button-success-text-disabled)] disabled:!stroke-[var(--button-success-text-disabled)] disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none stroke-[var(--button-success-text-default)] !text-[var(--button-success-text-default)]',

    unStyled:
        'focus-visible:ring-4  focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none',
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

const variantsCva = cva('', {
    variants: {
        variant: buttonVariants,
        size: buttonSizeVariants,
    },
    defaultVariants: {
        size: 'md',
        variant: 'primary',
    },
})

const iconColorCva = cva('', {
    variants: {
        variant: buttonIconColorVariants,
    },
    defaultVariants: {
        variant: 'primary',
    },
})

const textCva = cva('', {
    variants: {
        size: buttonTextVariants,
    },
    defaultVariants: {
        size: 'md',
    },
})

interface ButtonProps extends ForwardRefComponent<HTMLButtonElement, HTMLMotionProps<'button'>> {
    variant?: ButtonVariantType
    size?: ButtonSizeType
    loading?: boolean
}

// todo - missing loading state, children, and other conditions
export const Button = ({ variant, size, loading, ...props }: ButtonProps) => {
    const isDisabled = loading || props.defaultProps?.disabled
    return (
        <div className="">
            <motion.button className="" {...props} disabled={isDisabled}>
                Button
            </motion.button>
        </div>
    )
}
