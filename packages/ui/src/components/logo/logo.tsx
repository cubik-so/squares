import React from 'react'
import { cva } from 'class-variance-authority'
import { handleMediaQuery } from '@/hooks/handleMediaQuery'
import { cn } from '@utils/cn'
import type { VariantProps } from 'class-variance-authority';

const logoVariants = cva('', {
    variants: {
        variant: {
            icon: '',
            text: '',
        },
        size: {
            xs: '',
            sm: 'w-[24px] h-auto',
            md: 'w-[28px] md:w-[32px] h-auto',
            lg: '',
            xl: '',
            '2xl': '',
            '3xl': '',
        },
    },
    defaultVariants: {
        variant: 'icon',
        size: 'md',
    },
})

interface LogoProps extends VariantProps<typeof logoVariants> {}

// size: md, variant: icon
export const Logo = ({ size, variant = 'icon' }: LogoProps) => {
    return (
        <span className="flex flex-row gap-2">
            <span
                className={cn(
                    `${variant === 'text' && 'hidden'}`,
                    handleMediaQuery([
                        {
                            className: logoVariants({
                                size: size,
                                variant,
                            }),
                            type: 'default',
                        },
                        {
                            className: logoVariants({
                                size: 'sm',
                                variant,
                            }),
                            type: 'sm',
                        },
                    ]),
                )}
            >
                <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M80.2386 34.316V11.3911C80.2386 7.30656 76.9442 4 72.8746 4H44.6165C42.661 4 40.7848 4.77801 39.4107 6.16606L6.15817 39.5411C4.77522 40.9291 4 42.8123 4 44.7661V78.3003C4 82.3849 7.29441 85.6914 11.364 85.6914H34.2048C38.2743 85.6914 41.5687 82.3849 41.5687 78.3003V46.8792C41.5687 44.0235 43.8766 41.7071 46.7218 41.7071H72.8746C76.9442 41.7071 80.2386 38.4006 80.2386 34.316ZM93.7936 42.3086H116.634C120.704 42.3086 123.998 45.6152 123.998 49.6997V83.2339C123.998 85.1877 123.223 87.0709 121.84 88.4589L88.5877 121.834C87.2135 123.222 85.3373 124 83.3817 124H55.1238C51.0542 124 47.7598 120.693 47.7598 116.609V93.684C47.7598 89.5994 51.0542 86.2929 55.1238 86.2929H81.2765C84.1217 86.2929 86.4296 83.9765 86.4296 81.1209V49.6997C86.4296 45.6152 89.724 42.3086 93.7936 42.3086Z"
                        fill={'var(--color-fg-primary-depth)'}
                    />
                </svg>
            </span>
            {variant == 'text' && (
                <p className="my-auto text-center text-[var(--color-fg-primary-depth)] text-lg font-bold leading-8 tracking-[0.2em] uppercase">
                    Cubik
                </p>
            )}
        </span>
    )
}

export type { LogoProps }
