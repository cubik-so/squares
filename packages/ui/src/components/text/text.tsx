import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import type { VariantProps } from 'class-variance-authority'
import type { ClassValue } from 'clsx'

const headingVariant = cva('antialiased', {
    variants: {
        color: {
            primary: 'text-[var(--color-fg-primary-depth)]',
            secondary: 'text-[var(--color-fg-primary-base)]',
            tertiary: 'text-[var(--color-fg-primary-subdued)]',
            positive: 'text-[var(--color-fg-positive-emphasis)]',
            negative: 'text-[var(--color-fg-negative-base)]',
            info: 'text-[var(--color-fg-info-base)]',
            caution: 'text-[var(--color-fg-caution-emphasis)]',
            alert: 'text-[var(--color-fg-alert-base)]',
            innovative: 'text-[var(--color-fg-innovative-base)]',
            inherit: '',
            inverse: 'text-[var(--color-fg-primary-inverse)]',
            placeholder: 'text-[var(--form-input-placeholder-default)]',
        },
    },
    defaultVariants: {
        color: 'inherit',
    },
})

interface TextProps extends VariantProps<typeof headingVariant> {
    children: React.ReactNode
    className?: ClassValue
}

export const Text = ({ children, color, className }: TextProps) => {
    return <p className={cn(className, headingVariant({ color }))}>{children}</p>
}
