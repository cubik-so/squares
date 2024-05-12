import React from 'react'
import * as Separator from '@radix-ui/react-separator'
import { cn } from '@utils/cn'

interface Props {
    orientation?: 'vertical' | 'horizontal'
    background?: string
    className?: string
}
export const Divider = ({ orientation, background, className }: Props) => {
    return (
        <Separator.Root
            orientation={orientation ?? 'horizontal'}
            decorative
            className={cn(
                background ? background : 'bg-color-border-primary-base',
                'min-h-[1px] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px ',
                className,
            )}
        />
    )
}
