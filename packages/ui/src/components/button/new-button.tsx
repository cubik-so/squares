import React from 'react'
import type { ForwardRefComponent, HTMLMotionProps } from 'framer-motion'

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

interface ButtonProps {
    children?: React.ReactNode
    variant?: ButtonVariantType
    size?: ButtonSizeType
    loading?: boolean
}

export const NewButton = ({ children }: ButtonProps) => {
    return (
        <button>
            <p>{children}</p>
        </button>
    )
}
