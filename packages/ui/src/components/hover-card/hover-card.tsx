import React, { createContext, useMemo } from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import { AnimatePresence, motion } from 'framer-motion'
import { v4 as uuid_v4 } from 'uuid'

import { cn } from '@utils/cn'

const HoverCardContext = createContext<{
    id: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}>({
    id: 'menu',
    isOpen: false,
    setIsOpen: () => undefined,
})

export const HoverCard = React.forwardRef<
    React.ElementRef<typeof HoverCardPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>
>(({ children, ...props }) => {
    const id = useMemo(() => uuid_v4(), [])
    const [isOpen, setIsOpen] = React.useState(false)
    const context = { id, isOpen, setIsOpen }

    return (
        <HoverCardContext.Provider value={context}>
            <HoverCardPrimitive.Root onOpenChange={setIsOpen} {...props}>
                <>{children}</>
            </HoverCardPrimitive.Root>
        </HoverCardContext.Provider>
    )
})
HoverCard.displayName = HoverCardPrimitive.Root.displayName
// customize the trigger by adding a custom animation using framer motino animatepresence when it pops up
export const HoverCardTrigger = ({
    children,
    width,
}: {
    children: React.ReactNode
    width: number | string
}) => {
    return (
        <HoverCardPrimitive.Trigger
            style={{
                width: width,
            }}
        >
            {children}
        </HoverCardPrimitive.Trigger>
    )
}

export const HoverCardContent = ({
    align = 'center',
    children,
}: {
    align?: 'start' | 'center' | 'end'
    children: React.ReactNode
}) => {
    const { isOpen } = React.useContext(HoverCardContext)
    return (
        <AnimatePresence>
            {isOpen && (
                <HoverCardPrimitive.HoverCardPortal forceMount>
                    <HoverCardPrimitive.Content align={align} asChild>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -5,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -5,
                            }}
                            className={cn('z-50')}
                        >
                            <>{children}</>
                        </motion.div>
                    </HoverCardPrimitive.Content>
                </HoverCardPrimitive.HoverCardPortal>
            )}
        </AnimatePresence>
    )
}

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
