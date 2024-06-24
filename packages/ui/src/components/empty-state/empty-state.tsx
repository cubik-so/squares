import { motion } from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import { Text } from '../text/text'

export const EmptyState = ({
    title,
    description,
    icon,
    iconColor,
    children,
    border,
    bgColor,
    className,
}: {
    title?: string
    description?: string
    children?: React.ReactNode
    border?: boolean
    iconColor?: string
    bgColor?: string
    icon: string
    className?: string
}) => {
    const isMobileDevice = useMediaQuery('(max-width: 640px)')
    const isTabletDevice = useMediaQuery('(max-width: 1024px)')
    const getDimensions = () => {
        if (isMobileDevice) {
            return 24
        }
        if (isTabletDevice) {
            return 32
        }
        return 36
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
                className,
                `flex items-center justify-center rounded-[8px] py-10 md:py-16 ${
                    border && 'border border-[var(--empty-state-border-secondary)]'
                }`,
            )}
        >
            <div className="item-center mx-auto flex max-w-[280px] flex-col items-center justify-center gap-4 text-center md:max-w-[360px] md:gap-4">
                <div
                    className={cn(
                        'flex w-fit items-center justify-center rounded-full p-2 md:p-4 2xl:p-6',
                        bgColor
                            ? `bg-[${bgColor}]`
                            : 'bg-[var(--color-surface-negative-transparent)]',
                    )}
                >
                    <Icon
                        name={icon}
                        color={iconColor || 'var(--color-fg-negative-base)'}
                        width={getDimensions()}
                        height={getDimensions()}
                        strokeWidth={2}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
                    {title && (
                        <Text color="primary" className="b1-heavy md:b2-heavy">
                            {title}
                        </Text>
                    )}
                    {description && (
                        <Text color="tertiary" className="b4-light">
                            {description}
                        </Text>
                    )}
                </div>
                {children}
            </div>
        </motion.div>
    )
}
