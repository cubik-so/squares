import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cva } from 'class-variance-authority'
import { cn } from '@utils/cn'
import { handleMediaQuery } from '@/hooks/handleMediaQuery'
import Icon from '@/icons'
import type { IconName } from '@utils/iconLibrary'
import type { VariantProps } from 'class-variance-authority'

const avatarVariants = cva('', {
    variants: {
        variant: {
            square: '',
            circle: 'rounded-full',
        },
        size: {
            xs: 'w-[20px] h-[20px] md:w-[24px] md:h-[24px]', // [var(--size-sm)]
            sm: 'w-[28px] h-[28px] md:w-[32px] md:h-[32px] 2xl:w-[32px] 2xl:h-[32px] ',
            md: 'w-[32px] h-[32px] md:w-[44px] md:h-[44px] 2xl:w-[44px] 2xl:h-[44px] ',
            lg: 'w-[44px] h-[44px] md:w-[52px] md:h-[52px] 2xl:w-[56px] 2xl:h-[56px] ',
            xl: 'w-[56px] h-[56px] md:w-[64px] 2xl:w-[72px] md:h-[64px] 2xl:h-[72px] ',
            '2xl': 'w-[64px] h-[64px] md:w-[72px] md:h-[72px] 2xl:w-[84px] 2xl:h-[84px] ',
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
    defaultVariants: {
        variant: 'circle',
        size: 'md',
    },
})

const iconVariants = cva(
    'absolute shadow-md block z-1 rounded-full p-1  bg-[var(--avatar-status)] border border-[var(--avatar-status)]',
    {
        variants: {
            variant: {
                square: '-bottom-1 -right-1',
                circle: 'bottom-0 right-0',
            },
            size: {
                xs: 'w-[6px] h-[6px]',
                sm: 'w-[8px] h-[8px]',
                md: 'w-[10rem] h-[10rem]',
                lg: 'w-[16rem] h-[16rem]',
                xl: 'w-[64px] h-[64px]',
                '2xl': 'w-[80px] h-[80px]',
            },
        },
        defaultVariants: {
            size: 'sm',
            variant: 'circle',
        },
    },
)
const childrenPositionVariant = cva('', {
    variants: {
        variant: {
            square: '',
            circle: '',
        },
        size: {
            xs: '',
            sm: 'translate-x-1',
            md: '',
            lg: '',
            xl: '',
            '2xl': '',
        },
    },
    defaultVariants: {
        size: 'sm',
        variant: 'circle',
    },
})

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    src: string
    alt: string
    className?: string
    iconName?: IconName
    iconClick?: () => void
    layoutId?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export const Avatar = ({
    src,
    alt,
    variant,
    size,
    className,
    iconName,
    iconClick,
    layoutId,
    style,
    children,
}: AvatarProps) => {
    return (
        <motion.div
            className={cn(
                'relative inline-block',
                handleMediaQuery([
                    {
                        className: avatarVariants({
                            size: size,
                            variant,
                            className,
                        }),
                        type: 'default',
                    },
                    {
                        className: avatarVariants({
                            size: 'sm',
                            variant,
                            className,
                        }),
                        type: 'sm',
                    },
                ]),
                className,
            )}
            style={style}
            layoutId={layoutId}
        >
            {/* <Image
                src={src}
                alt={alt}
                fill={true}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                    objectFit: 'cover',
                    background: 'transparent',
                    borderRadius: variant === 'circle' ? '100%' : '8px',
                }}
                priority
            /> */}
            <Image
                src={src}
                alt={alt}
                layout="responsive" // This will make the image responsive while maintaining aspect ratio
                width={1} // You use a 1:1 aspect ratio or adjust as necessary
                height={1} // Adjust the height relative to width as per the aspect ratio of the image
                style={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain', // Ensures the image is scaled to fit and maintain its aspect ratio
                    background: 'transparent',
                    borderRadius: variant === 'circle' ? '50%' : '8px',
                }}
                priority
            />

            {iconName && (
                <Icon
                    name={iconName}
                    className={cn(iconVariants({ variant, size }), 'w-6 h-6')}
                    color="var(--avatar-status-icon)"
                    onClick={iconClick}
                    width={10}
                    height={10}
                />
            )}
            <div
                className={cn(
                    'absolute shadow-md block z-1 rounded-full right-0 bottom-0 transform translate-x-2 bg-[var(--avatar-status)]',
                    childrenPositionVariant({ variant, size }),
                )}
            >
                {children}
            </div>
        </motion.div>
    )
}
