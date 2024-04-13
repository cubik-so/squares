import { cva } from 'class-variance-authority'
import React from 'react'
import Icon from '@/icons'
import { Text } from '@components/text/text'
import { cn } from '@utils/cn'
import type { VariantProps } from 'class-variance-authority'

interface AlertProps extends VariantProps<typeof AlertVariants> {
    className?: string
    title?: string
    description?: string
    iconName?: string
    children?: React.ReactNode
}

const AlertVariants = cva(
    'w-full flex flex-col md:flex-row items-start justify-between gap-2 p-3 md:p-4',
    {
        variants: {
            variant: {
                default: '',
                textOnly: '',
                leftOutline: '',
                border: '',
            },
            state: {
                default: '',
                success: '',
                info: '',
                warning: '',
                error: '',
                innovative: '',
            },
        },
        compoundVariants: [
            {
                variant: 'default',
                state: 'default',
                className: ' rounded-lg bg-alert-default-surface',
            },
            {
                variant: 'default',
                state: 'info',
                className: ' rounded-lg bg-alert-info-surface',
            },
            {
                variant: 'default',
                state: 'success',
                className: ' rounded-lg bg-alert-success-surface',
            },
            {
                variant: 'default',
                state: 'error',
                className: 'rounded-lg bg-alert-error-surface',
            },
            {
                variant: 'default',
                state: 'warning',
                className: 'rounded-lg bg-alert-warning-surface',
            },
            {
                variant: 'default',
                state: 'innovative',
                className: 'rounded-lg bg-alert-loading-surface',
            },
            {
                variant: 'border',
                state: 'default',
                className:
                    'border border-color-surface-primary-transparent rounded-lg bg-alert-default-surface',
            },
            {
                variant: 'border',
                state: 'info',
                className: ' rounded-lg bg-alert-info-surface  border border-alert-info-border',
            },
            {
                variant: 'border',
                state: 'success',
                className:
                    ' rounded-lg bg-alert-success-surface  border border-alert-success-border',
            },
            {
                variant: 'border',
                state: 'warning',
                className:
                    ' rounded-lg bg-alert-warning-surface  border border-alert-warning-border',
            },
            {
                variant: 'border',
                state: 'error',
                className: ' rounded-lg bg-alert-error-surface border border-alert-error-border',
            },
            {
                variant: 'border',
                state: 'innovative',
                className:
                    ' rounded-lg bg-alert-loading-surface  border border-alert-loading-border',
            },
            {
                variant: 'leftOutline',
                state: 'default',
                className:
                    'bg-alert-default-surface rounded-r-lg border-l border-color-border-primary-subdued',
            },
            {
                variant: 'leftOutline',
                state: 'info',
                className: 'bg-alert-info-surface rounded-r-lg border-l border-alert-info-border',
            },
            {
                variant: 'leftOutline',
                state: 'success',
                className:
                    'bg-alert-success-surface rounded-r-lg border-l border-alert-success-border',
            },
            {
                variant: 'leftOutline',
                state: 'warning',
                className:
                    'bg-alert-warning-surface rounded-r-lg border-l border-alert-warning-border',
            },
            {
                variant: 'leftOutline',
                state: 'innovative',
                className:
                    'bg-alert-loading-surface rounded-r-lg border-l border-alert-loading-border',
            },
            {
                variant: 'leftOutline',
                state: 'error',
                className: 'bg-alert-error-surface rounded-r-lg border-l border-alert-error-border',
            },
        ],
        defaultVariants: {
            variant: 'default',
            state: 'default',
        },
    },
)

const iconStateVariants = cva('', {
    variants: {
        state: {
            default: 'color-fg-primary-base',
            success: 'alert-success-icon-fill',
            info: 'alert-info-icon-fill',
            warning: 'alert-warning-icon-fill',
            error: 'alert-error-icon-fill',
            innovative: 'alert-loading-icon-fill',
        },
    },
    defaultVariants: {
        state: 'default',
    },
})
const textStateVariant = cva('', {
    variants: {
        state: {
            default: 'primary',
            info: 'info',
            success: 'positive',
            error: 'negative',
            warning: 'caution',
            innovative: 'innovative',
        },
    },
    defaultVariants: {
        state: 'default',
    },
})
const descriptionStateVariant = cva('', {
    variants: {
        state: {
            default: 'secondary',
            info: 'info',
            success: 'positive',
            error: 'negative',
            warning: 'caution',
            innovative: 'innovative',
        },
    },
    defaultVariants: {
        state: 'default',
    },
})

const Alert = ({
    variant,
    state,
    className,
    iconName,
    title,
    description,
    children,
}: AlertProps) => {
    return (
        <div className={cn(AlertVariants({ variant, state }), className)}>
            <div className=" flex gap-2 items-start justify-start">
                <div className="py-1">
                    {iconName && (
                        <Icon
                            name={iconName}
                            color={cn(iconStateVariants({ state }))}
                            strokeWidth={1.8}
                            width={20}
                            height={20}
                        />
                    )}{' '}
                </div>
                <div className="flex flex-col p-1 gap-1">
                    {title && (
                        <Text
                            className="l1-heavy md:l2-heavy"
                            color={cn(textStateVariant({ state })) as any}
                        >
                            {title}
                        </Text>
                    )}
                    {description && (
                        <Text
                            className="l1-light md:l2-light"
                            color={cn(descriptionStateVariant({ state })) as any}
                        >
                            {description}
                        </Text>
                    )}
                </div>
            </div>
            {children && <div className="py-1 ml-[28px] md:ml-[0]">{children}</div>}
        </div>
    )
}

export { Alert }
export type { AlertProps }
