'use client'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import type { ClassValue } from 'clsx'

const transition = {
    duration: 0.4,
    ease: [0.175, 0.885, 0.32, 0.98],
}

interface Props {
    className?: ClassValue
    onClick?: () => void
    color?: ClassValue
    size?: 'sm' | 'md' | 'xl'
}

const getSize = (size: Props['size']) => {
    if (size === 'sm') return '16'
    if (size === 'md') return '18'
    if (size === 'xl') return '30'
}

export const Spinner = ({ className, size = 'md' }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center justify-center color-[var(--color-fg-primary-depth)]',
                className,
            )}
        >
            <motion.div
                className="animate-spin"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{
                    opacity: 1,
                    rotate: 0,
                }}
                exit={{
                    position: 'absolute',
                    opacity: 0,
                    rotate: -180,
                    transition: {
                        ...transition,
                    },
                }}
                transition={{
                    ...transition,
                    delay: 0.2,
                }}
            >
                <svg
                    width={getSize(size)}
                    height={getSize(size)}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="9" cy="9" r="7" stroke={'#ffffff20'} strokeWidth="2.5" />
                    <path
                        d="M16 9C16 5.13401 12.866 2 9 2"
                        stroke={'#ffffff'}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            </motion.div>
        </div>
    )
}
