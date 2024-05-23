import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva } from 'class-variance-authority'
import React from 'react'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import type { VariantProps } from 'class-variance-authority'

const checkboxVariants = cva(
    'peer border-2 border-color-border-primary-subdued shrink-0 rounded-[6px] focus-visible:outline-none focus-visible:ring-1 hover:border-form-checkbox-border-hovered focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:bg-form-checkbox-surface-hovered disabled:border-form-checkbox-border-disabled disabled:bg-form-checkbox-surface-disabled data-[state=checked]:bg-form-checkbox-surface-default-checked data-[state=checked]:border-form-checkbox-surface-default-checked',
    {
        variants: {
            size: {
                sm: 'h-5 w-5',
                md: 'h-6 w-6',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    },
)

interface CheckboxProps extends VariantProps<typeof checkboxVariants> {
    className?: string
    onCheckedChange: (e: any) => void
    defaultChecked?: boolean
}

export const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, size = 'md', defaultChecked = false, onCheckedChange, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(className, checkboxVariants({ size }))}
        defaultChecked={defaultChecked}
        onChange={onCheckedChange}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
        >
            <Icon
                name="check"
                strokeWidth={3}
                width={16}
                height={16}
                color="var(--color-fg-primary-depth)"
            />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))

Checkbox.displayName = CheckboxPrimitive.Root.displayName
