import React, { createContext, useContext } from 'react'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@utils/cn'
import type { ReactNode } from 'react'

// Card context to manage size variants
export type CardContextType = {
    size: 'sm' | 'md' | 'lg'
}

export const CardContext = createContext<CardContextType>({
    size: 'md',
})

// Variants for card components
const cardVariants = cva('rounded-[10px] md:rounded-[12px] overflow-hidden', {
    variants: {
        size: {
            sm: '',
            md: '',
            lg: '',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const cardHeaderVariants = cva('bg-card-surface-primary p-4 xl:p-5 2xl:p-6', {
    variants: {
        size: {
            sm: '',
            md: '',
            lg: '',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const cardBodyVariants = cva('', {
    variants: {
        size: {
            sm: '',
            md: '',
            lg: '',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const cardFooterVariants = cva('', {
    variants: {
        size: {
            sm: '',
            md: '',
            lg: '',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

// Card Wrapper Component
interface CardProps {
    children: ReactNode
    className?: string
    size: 'sm' | 'md' | 'lg'
}

export const Card: React.FC<CardProps> = ({ children, size }) => {
    return (
        <div>
            <CardContext.Provider value={{ size }}>
                <motion.div layout className={cn(cardVariants({ size }), 'bg-card-bg-primary')}>
                    {children}
                </motion.div>
            </CardContext.Provider>
        </div>
    )
}

// Card Header Component
interface CardHeaderProps {
    children: ReactNode
    className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    const { size } = useContext(CardContext)
    return <div className={cn(cardHeaderVariants({ size }), className)}>{children}</div>
}

// Card Body Component
interface CardBodyProps {
    children: ReactNode
    className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
    const { size } = useContext(CardContext)
    return <div className={cn(cardBodyVariants({ size }), className)}>{children}</div>
}

// Card Footer Component
interface CardFooterProps {
    children: ReactNode
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
    const { size } = useContext(CardContext)
    return <div className={cn(cardFooterVariants({ size }))}>{children}</div>
}
