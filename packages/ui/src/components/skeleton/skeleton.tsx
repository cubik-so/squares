import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuidV4 } from 'uuid'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface SkeletonProps {
    children?: ReactNode
    isLoaded?: boolean
    fadeDuration?: number
    startColor?: string
    endColor?: string
    className?: string
    fitContent?: boolean
}

const skeletonAnimation: Variants = {
    hidden: { opacity: 0.2 },
    visible: {
        opacity: 0.6,
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
}

export const Skeleton: React.FC<SkeletonProps> = ({
    children,
    isLoaded = false,
    fadeDuration = 0.8,
    startColor = 'from-color-surface-cool-transparent',
    endColor = 'to-color-surface-primary-transparent',
    className = '',
    fitContent = true,
    ...props
}) => {
    const id = uuidV4()
    const ref = useRef<HTMLDivElement>(null)
    const [hasMeasured, setHasMeasured] = useState(false)

    useEffect(() => {
        if (fitContent && ref.current && !hasMeasured) {
            setHasMeasured(true) // Ensure measurement occurs once
        }
    }, [children, fitContent, hasMeasured])

    const fadeInVariants: Variants = {
        from: { opacity: 0 },
        to: {
            opacity: 1,
            transition: {
                duration: fadeDuration,
            },
        },
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            {isLoaded ? (
                <motion.div
                    key={`content-${id}`}
                    initial="from"
                    animate="to"
                    exit="from"
                    ref={ref}
                    variants={fadeInVariants}
                    {...props}
                >
                    {children}
                </motion.div>
            ) : (
                <motion.div
                    key={`skeleton-${id}`}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={skeletonAnimation}
                    className={`bg-gradient-to-r w-[${ref.current?.offsetWidth}px] h-[${ref.current?.offsetHeight}px]  ${startColor} ${endColor} rounded-lg ${className}`}
                    //style={dynamicStyles}
                    {...props}
                />
            )}
        </AnimatePresence>
    )
}

interface CircularSkeletonProps extends SkeletonProps {}

export const CircularSkeleton: React.FC<CircularSkeletonProps> = ({ className = '', ...props }) => (
    <Skeleton {...props} className={`rounded-[50%] ${className}`} />
)

interface TextSkeletonProps extends SkeletonProps {
    noOfLines?: number
}

export const TextSkeleton: React.FC<TextSkeletonProps> = ({
    noOfLines = 3,
    className = '',
    ...props
}) => (
    <>
        {Array.from({ length: noOfLines }).map((_, index) => (
            <Skeleton
                key={index}
                {...props}
                className={`h-4 my-2 ${index === 0 ? 'w-3/4' : 'w-full'} ${className}`}
            />
        ))}
    </>
)
