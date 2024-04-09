'use client'

import React from 'react'
import { cn } from '@utils/cn'
import { Text } from '../text/text'

interface Props {
    heading: string
    iconName?: string
    children?: React.ReactNode
    className?: string
    description?: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
}
export const SubHead = ({ heading, description, children, className, size = 'md' }: Props) => {
    const getTextSize = () => {
        if (size === 'sm') {
            return 'h5 md:h6'
        }
        if (size === 'md') {
            return 'h4 sm:h5'
        }
        if (size === 'lg') {
            return 'h3 sm:h4'
        }
        return 'h2 sm:h3'
    }
    const getDescriptionSize = () => {
        if (size === 'sm') {
            return 'b4-light'
        }
        if (size === 'md') {
            return 'b4-light'
        }
        if (size === 'lg') {
            return 'b4-light'
        }
        return 'b3'
    }

    return (
        <>
            <div
                className={cn(
                    'flex justify-between items-center min-h-[32px] lg:min-h-[40px]',
                    className,
                )}
            >
                <div className="flex flex-col items-start gap-[6px]">
                    <Text color="primary" className={getTextSize()}>
                        {heading}
                    </Text>
                    {description && (
                        <Text color="tertiary" className={getDescriptionSize()}>
                            {description}
                        </Text>
                    )}
                </div>

                {children}
            </div>
        </>
    )
}
