import React from 'react'
import { cn } from '../../utils/cn' // todo - Fix the import resolve issue
import type { ClassValue } from 'clsx'

/*
 * Text component size variants type h
 */
type hVariants =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h1-light'
    | 'h2-light'
    | 'h3-light'
    | 'h4-light'
    | 'h5-light'
    | 'h6-light'
    | 'h1-heavy'
    | 'h2-heavy'
    | 'h3-heavy'
    | 'h4-heavy'
    | 'h5-heavy'
    | 'h6-heavy'

/*
 * Text component size variants type b
 */
type bVariants =
    | 'b1'
    | 'b2'
    | 'b3'
    | 'b4'
    | 'b1-light'
    | 'b2-light'
    | 'b3-light'
    | 'b4-light'
    | 'b1-heavy'
    | 'b2-heavy'
    | 'b3-heavy'
    | 'b4-heavy'

/*
 * Text component size variants type l
 */
type lVariants =
    | 'l1'
    | 'l2'
    | 'l3'
    | 'l1-light'
    | 'l2-light'
    | 'l3-light'
    | 'l1-heavy'
    | 'l2-heavy'
    | 'l3-heavy'

/*
 * Text component size variants type
 */
type TextVariantType = hVariants | bVariants | lVariants

/*
 * Text component color variants
 */
type TextColorVariants =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'positive'
    | 'negative'
    | 'info'
    | 'caution'
    | 'alert'
    | 'innovative'
    | 'placeholder'
    | 'inverse'
    | 'inherit'

/*
 * Text component color variants
 */
const textColorVariants: {
    [key in TextColorVariants]: ClassValue
} = {
    primary: 'text-color-fg-primary-depth',
    secondary: 'text-color-fg-primary-base',
    tertiary: 'text-color-fg-primary-subdued',
    positive: 'text-color-fg-positive-emphasis',
    negative: 'text-color-fg-negative-base',
    info: 'text-color-fg-info-base',
    caution: 'text-color-fg-caution-emphasis',
    alert: 'text-color-fg-alert-base',
    innovative: 'text-color-fg-innovative-base',
    inherit: '',
    inverse: 'text-color-fg-primary-inverse',
    placeholder: 'text-form-input-placeholder-default',
}

interface TextProps {
    variant?: TextVariantType
    color?: TextColorVariants
    children: React.ReactNode
}
export const Text = ({ children, color, variant }: TextProps) => {
    return <p className={cn(textColorVariants[color || 'inherit'], variant)}>{children}</p>
}
