import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import { Text } from '../text/text'

type TextProps = React.HTMLAttributes<HTMLLabelElement> & {
    counterValue?: number // current value for the counter
    maxCounterValue?: number // max value for the counter and set to show the counter in UI
    isRequired?: boolean
    infoText?: string
    icon?: React.ReactNode
}

export const InputLabel = ({
    className,
    children,
    counterValue,
    maxCounterValue,
    isRequired,
    infoText,
    ...props
}: TextProps) => {
    const isSmallerDevice = useMediaQuery('(max-width: 768px)')
    const tooltipIconSize = isSmallerDevice ? 14 : 18

    return (
        <div className="flex justify-between items-start w-full">
            <div className="flex justify-start items-start gap-1">
                <label
                    className={cn('transition-colors text-[var(--color-fg-primary)]', className)}
                    {...props}
                >
                    <Text className="h4-light md:l1">{children}</Text>
                </label>
                {isRequired && (
                    <span className={cn('text-[var(--color-red-500)] transition-colors')}>*</span>
                )}
                {infoText && tooltipIconSize && (
                    <div className="my-auto pb-[2px]">
                        {/* @todo: make a tooltip component and add here later */}
                        <Icon
                            name="info-circle-filled"
                            height={tooltipIconSize}
                            width={tooltipIconSize}
                            color="#c1c1c1"
                            strokeWidth={1.2}
                        />
                        {/* <Tooltip>
                                <TooltipTrigger>
                                    <Icon
                                        name="infoCircleFilled"
                                        height={tooltipIconSize}
                                        width={tooltipIconSize}
                                        color="var(--color-fg-cool-muted)"
                                        strokeWidth={1.2}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <Text className="l1 md:l3-heavy">{props.infoText}</Text>
                                </TooltipContent>
                            </Tooltip> */}
                    </div>
                )}
                {props.icon}
            </div>
            {maxCounterValue && (
                <Text
                    className={'transition-colors l2'}
                    color={Number(counterValue) > Number(maxCounterValue) ? 'negative' : 'tertiary'}
                >
                    {counterValue}/{maxCounterValue}
                </Text>
            )}
        </div>
    )
}
