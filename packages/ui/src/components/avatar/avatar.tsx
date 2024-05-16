import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import React from 'react'
import Icon from '@/icons'
import { cn } from '@utils/cn'
import type { VariantProps } from 'class-variance-authority'

const avatarVariants = cva('', {
    variants: {
        variant: {
            square: '',
            circle: 'rounded-full',
        },
        size: {
            xs: 'w-[20px] h-[20px] md:w-[24px] md:h-[24px]', // [var(--size-sm)]
            sm: 'w-[28px] h-[28px] md:w-[32px] md:h-[32px]',
            md: 'w-[32px] h-[32px] md:w-[44px] md:h-[44px]',
            lg: 'w-[44px] h-[44px] md:w-[52px] md:h-[52px] 2xl:w-[56px] 2xl:h-[56px]',
            xl: 'w-[56px] h-[56px] md:w-[64px] 2xl:w-[72px] md:h-[64px] 2xl:h-[72px]',
            '2xl': 'w-[64px] h-[64px] md:w-[72px] md:h-[72px] 2xl:w-[84px] 2xl:h-[84px]',
        },

        groupVariant: {
            'squared-horizontal': '',
            circular: '',
            squared: '',
        },
    },
    compoundVariants: [
        {
            variant: 'square',
            size: 'xs',
            class: 'rounded-xs w-[20px] h-[20px] md:w-[24px] md:h-[24px]',
        },
        {
            variant: 'square',
            size: 'sm',
            class: 'rounded-xs md:rounded-sm w-[28px] h-[28px] md:w-[30px] md:h-[30px]',
        },
        {
            variant: 'square',
            size: 'md',
            class: 'rounded-sm md:rounded-md w-[30px] h-[30px] md:w-[44px] md:h-[44px]',
        },
        {
            variant: 'square',
            size: 'lg',
            class: 'rounded-md md:rounded-lg w-[44px] h-[44px] md:w-[56px] md:h-[56px]',
        },
        {
            variant: 'square',
            size: 'xl',
            class: 'rounded-md md:rounded-lg w-[56px] h-[56px] md:w-[72px] md:h-[72px]',
        },
        {
            variant: 'square',
            size: '2xl',
            class: 'rounded-md md:rounded-lg w-[64px] h-[64px] md:w-[84px] md:h-[84px]',
        },
    ],
})

const iconVariants = cva('', {
    variants: {
        variant: {
            square: '-bottom-1 -right-1',
            circle: 'bottom-0 right-0',
        },
        size: {
            xs: 'w-[10px] h-[10px]',
            sm: 'w-[10px] h-[10px]',
            md: 'w-[12px] h-[12px]',
            lg: 'w-[14px] h-[14px]',
            xl: 'w-[16px] h-[16px]',
            '2xl': 'w-[18px] h-[18px]',
        },
    },
})
const getIconSize = (size: string | null | undefined) => {
    switch (size) {
        case '2xl':
            return { height: 24, width: 24, strokeWidth: 2 }
        case 'xl':
            return { height: 20, width: 20, strokeWidth: 2 }
        case 'lg':
            return { height: 18, width: 18, strokeWidth: 2 }
        case 'md':
            return { height: 18, width: 18, strokeWidth: 2 }

        case 'sm':
            return { height: 12, width: 12, strokeWidth: 1.8 }
        case 'xs':
            return { height: 8, width: 8, strokeWidth: 1.8 }
        default:
            return { height: 16, width: 16, strokeWidth: 2 } // Default size
    }
}

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    src: string
    alt: string
    className?: string
    variant?: 'circle' | 'square'
    iconName?: string
}

export const Avatar = ({
    src,
    alt,
    variant = 'circle',
    size = 'md',
    iconName,
    groupVariant = 'circular',
}: AvatarProps) => {
    return (
        <motion.div className="relative ">
            <img
                src={src}
                alt={alt}
                style={{
                    objectFit: 'cover',
                    background: 'transparent',
                    borderRadius: variant === 'circle' ? '100%' : '8px',
                }}
                className={cn(avatarVariants({ size, groupVariant }))}
            />
            {iconName && (
                <div
                    className={cn(
                        iconVariants({ variant, size }),
                        'absolute z-1 rounded-full bg-avatar-status border border-avatar-status flex items-center justify-center',
                    )}
                >
                    <Icon
                        name={'plus'}
                        className={cn(iconVariants({ size }))}
                        {...getIconSize(size)}
                    />
                </div>
            )}
        </motion.div>
    )
}
