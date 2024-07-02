import React, { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuidV4 } from 'uuid'

import { cn } from '@utils/cn'
import { Text } from '../text/text'
import type { VariantProps } from 'class-variance-authority'

export const helperTextVariants = cva('', {
    variants: {
        variant: {
            default: '!text-[var(--color-fg-primary-base)]',
            success: '!text-[var(--color-fg-positive-base)]',
            error: '!text-[var(--color-fg-negative-base)]',
        },
    },
})

type TextProps = React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof helperTextVariants> & { show?: boolean }

export const HelperText = forwardRef<HTMLElement | null, TextProps>(
    ({ className, children, variant = 'default', show }) => {
        const id = uuidV4()
        console.log('variant', variant)
        return (
            <AnimatePresence>
                {show && (
                    <motion.div
                        layoutId={id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.4,
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        <Text className={cn(helperTextVariants({ variant }), className, 'l2')}>
                            {children}
                        </Text>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
)

HelperText.displayName = 'HelperText'
