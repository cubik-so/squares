import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@utils/cn'
import { Text } from '../text/text'
import type { ReactNode } from 'react'

interface TooltipProps {
    children: ReactNode
    content: string
    align?: 'start' | 'center' | 'end'
}

export const Tooltip = ({ children, content, align = 'center' }: TooltipProps) => {
    return (
        <RadixTooltip.Provider delayDuration={0}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger> {children} </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content
                        align={align}
                        className={cn(
                            'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-lg px-3 py-2 bg-color-bg-info-base text-white leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] max-w-[200px] md:max-w-xs',
                        )}
                        sideOffset={5}
                    >
                        <Text className="l3-light">{content}</Text>

                        <RadixTooltip.Arrow className="fill-color-bg-info-base" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    )
}
