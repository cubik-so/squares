import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCopyToClipboard } from 'usehooks-ts'

import Icon from '../../icons'
import { Text } from '../text'
import { toast } from '../toast'
import { Tooltip } from '../tooltip'

const iconContainerVariants = {
    initial: {
        scale: 0.8,
        x: 0,
        opacity: 0.2,
        color: 'var(--color-fg-primary-base)',
    },
    animate: {
        scale: 1.2,
        x: 3,
        opacity: 1,
        color: 'var(--color-fg-positive-depth)',
        transition: {
            duration: 0.4,
            type: 'spring',
            bounce: 0.25,
        },
    },
}

export const CopyToClipboard = ({
    children,
    align = 'center',
    copyItem,
    className,
    iconColor,
    size = 'md',
}: {
    children: React.ReactNode
    align?: 'center' | 'start' | 'end'
    copyItem: string
    className?: string
    iconColor?: string
    size?: 'sm' | 'md' | 'lg'
}) => {
    const [, copy] = useCopyToClipboard()
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        copy(copyItem)
            .then(() => {
                setIsCopied(true)
                toast.success('Copied to clipboard')
                setTimeout(() => setIsCopied(false), 2000)
            })
            .catch((error) => {
                toast.error(`Error copying: ${error.message}`)
            })
    }
    // set size using if else condition
    let iconSize
    if (size === 'sm') {
        iconSize = 12
    } else if (size === 'lg') {
        iconSize = 20
    } else {
        iconSize = 16
    }

    return (
        <Tooltip
            duration={200}
            content={
                <AnimatePresence initial={false}>
                    {isCopied ? (
                        <motion.div
                            layout
                            key="copied"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            <Text className="l1 md:l3-heavy">Copied</Text>
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            key="copy"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            <Text className="l1 md:l3-heavy">Copy</Text>
                        </motion.div>
                    )}
                </AnimatePresence>
            }
        >
            <div onClick={() => handleCopy()} className="w-full">
                <div
                    className={`w-full cursor-pointer flex flex-row gap-2 items-center justify-start ${className}`}
                >
                    {children}
                    <motion.div
                        key={isCopied ? 'copied' : 'copy'}
                        variants={iconContainerVariants}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                    >
                        {isCopied ? (
                            <Icon
                                name="copied"
                                color={'var(--color-fg-positive-emphasis)'}
                                width={iconSize}
                                height={iconSize}
                                strokeWidth={1.5}
                            />
                        ) : (
                            <Icon
                                name="copy"
                                color={iconColor ? iconColor : 'var(--color-fg-primary-base)'}
                                width={iconSize}
                                strokeWidth={1.5}
                                height={iconSize}
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </Tooltip>
    )
}
