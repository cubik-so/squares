 
 
'use client'

import React, { createContext, useContext, useState } from 'react'

import { cn } from '../../../lib/utils'

export const InputFieldContainerVariants = {
    variants: {
        size: {
            md: 'h-[38px] md:h-[40px]',
            sm: 'h-[34px] md:h-[36px]',
        },
    },
}

type InputContextType = {
    isFocused: boolean
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputContext = createContext<InputContextType>({
    isFocused: false,
    setIsFocused: () => {
        console.log('empty fn')
    },
})

export const InputLeftElement = ({
    children,
    isDisabled,
}: {
    children: React.ReactNode | React.ReactNode[]
    isDisabled?: boolean
}) => {
    return (
        <div
            className={cn(
                // 'border border-red-500',
                isDisabled
                    ? 'text-[var(--form-input-fg-disabled)]'
                    : 'text-[var(--form-input-fg-default)]',
                'inline-flex gap-2 items-center rounded-l-[8px] ps-3',
            )}
        >
            {children}
        </div>
    )
}
export const InputRightElement = ({
    children,
    isDisabled,
    className,
}: {
    children: React.ReactNode
    isDisabled?: boolean
    className?: string
}) => {
    return (
        <div
            className={cn(
                // 'border border-red-500',
                isDisabled
                    ? 'text-[var(--form-input-fg-disabled)]'
                    : 'text-[var(--form-input-fg-default)]',
                'inline-flex items-center rounded-l-[8px] pe-3',
                className,
            )}
        >
            {children}
        </div>
    )
}

export const InputFieldContainer = ({
    children,
    isError,
    isDisabled,
    size,
    className,
    style,
}: {
    children: React.ReactNode
    isDisabled?: boolean
    isError?: boolean
    size: 'md' | 'sm'
    className?: string
    style?: React.CSSProperties
}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const childrenWithProps = React.Children.map(children, (child) => {
        // Checking if the child is a valid element before cloning it to prevent errors
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                isError,
                isDisabled,
                isFocused,
                size,
                setIsFocused,
                disabled: isDisabled,
            } as Partial<typeof child.props>)
        }
        return child
    })

    const disabledClasses = isDisabled
        ? 'cursor-not-allowed border-[var(--form-input-border-disabled)] bg-[var(--form-input-surface-disabled)]'
        : ''
    const sizeClasses = InputFieldContainerVariants.variants.size[size]
    const focusClasses = isFocused
        ? 'border border-[var(--form-input-border-focused)] ring-4 ring-[var(--color-surface-primary-transparent)] bg-[var(--form-input-surface-focused)] text-[var(--form-input-fg-focused)]'
        : ''
    const errorClasses = isError
        ? 'border border-[var(--form-input-border-error)] hover:border-[var(--form-input-border-error)] ring-4 ring-[var(--color-surface-negative-transparent)] bg-[var(--form-input-surface-error)] text-[var(--form-input-fg-error)]'
        : 'border-[var(--form-input-border-default)]'
    const baseClasses =
        'flex rounded-[8px] w-full transition-all bg-[var(--form-input-surface-default)] hover:text-[var(--form-input-fg-hovered)] border hover:ring-4 ring-[var(--color-surface-primary-transparent)] hover:bg-[var(--form-input-surface-hovered)]'

    const combinedClasses = cn(
        baseClasses,
        sizeClasses,
        disabledClasses,
        focusClasses,
        errorClasses,
        className,
    )

    return (
        <InputContext.Provider
            value={{
                isFocused,
                setIsFocused,
            }}
        >
            <div className={combinedClasses}>{childrenWithProps}</div>
        </InputContext.Provider>
    )
}

export const InputField = React.forwardRef<HTMLInputElement, InputProps>(function InputField(
    { type, onFocus, onBlur, className, ...props },
    ref,
) {
    const { setIsFocused } = useContext(InputContext)
    return (
        <input
            className={cn(
                'bg-[var(--form-input-surface-default)] text-[var(--form-input-fg-default)]',
                'disabled:text-[var(--form-input-fg-disabled)] disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[var(--form-input-border-disabled)] disabled:bg-[var(--form-input-surface-disabled)]',
                'block w-full flex-1 rounded-[8px] border-0 p-3 outline-none font-medium text-sm md:text-md',
                'placeholder:text-[var(--form-input-border-default)] placeholder:text-sm placeholder:font-normal',
                className,
            )}
            type={type}
            ref={ref}
            onFocus={(e) => {
                setIsFocused(true)
                onFocus && onFocus(e)
            }}
            onBlur={(e) => {
                setIsFocused(false)
                onBlur && onBlur(e)
            }}
            autoComplete="off"
            {...props}
        />
    )
})

InputField.displayName = 'InputField'
