import { cva } from 'class-variance-authority'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import { Text } from '../text/text'
import type { VariantProps } from 'class-variance-authority'

const titleVariants = cva('flex relative font-semibold text-[var(--avatar-label-title)]', {
    variants: {
        size: {
            xs: 'l1 md:l2',
            sm: 'b2 md:l1',
            md: 'h5',
            lg: 'h4',
            xl: 'h4',
            '2xl': 'h4',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const getIconSize = (size: string | null | undefined) => {
    switch (size) {
        case '2xl':
            return { height: 22, width: 22, strokeWidth: 2.5 }
        case 'xl':
            return { height: 22, width: 22, strokeWidth: 2.3 }
        case 'lg':
            return { height: 20, width: 20, strokeWidth: 2.2 }
        case 'md':
            return { height: 18, width: 18, strokeWidth: 2 }
        case 'sm':
            return { height: 16, width: 16, strokeWidth: 1.8 }
        case 'xs':
            return { height: 12, width: 12, strokeWidth: 1.8 }
        default:
            return { height: 18, width: 18, strokeWidth: 2 } // Default size
    }
}

interface TitleWithIconProps extends VariantProps<typeof titleVariants> {
    text: string
    icon?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    iconColor?: string
}

//@todo: add a default icon color later on
export const TitleWithIcon = ({ text, icon, size, iconColor }: TitleWithIconProps) => {
    return (
        <div className={cn('flex items-center gap-2')}>
            <Text className={cn(titleVariants({ size }))}>{text}</Text>
            {icon && <Icon name={icon} color={iconColor} {...getIconSize(size)} />}
        </div>
    )
}
