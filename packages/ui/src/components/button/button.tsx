import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@utils/cn'
import { Text } from '@components/text/text'
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
    'rounded-lg transform active:scale-95 transition-all whitespace-nowrap flex items-center justify-center  pointer-events-auto w-[fit-content]  gap-[6px] focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none'

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

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: ButtonVariantType
    size?: ButtonSizeType
    loading?: boolean
    loadingText?: string
}

// todo - missing loading state, children, and other conditions
export const Button = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    loadingText = undefined,
    className = '',
    ...props
}: ButtonProps): React.ReactNode => {
    const isDisabled = loading || props.disabled

    const innerButton = () => {
        if (!loading) {
            return (
                <Text color="inherit" variant="b1-heavy">
                    {props.children}
                </Text>
            )
        }

        return (
            <div className="flex flex-row gap-2">
                <div className="flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            repeat: Infinity,
                            ease: 'linear',
                            duration: 1,
                        }}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="9"
                                cy="9"
                                r="7"
                                stroke="currentColor"
                                strokeOpacity="0.1"
                                strokeWidth="2.5"
                            />
                            <path
                                d="M16 9C16 5.13401 12.866 2 9 2"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>
                </div>
                <Text variant="b2" color="inherit">
                    {loadingText ? loadingText : props.children}
                </Text>
            </div>
        )
    }

    return (
        <button
            className={cn(
                baseClass,
                buttonVariants[variant || 'primary'],
                buttonSizeVariants[size || 'md'],
                className,
            )}
            disabled={isDisabled}
            {...props}
        >
            {innerButton()}
        </button>
    )
}
