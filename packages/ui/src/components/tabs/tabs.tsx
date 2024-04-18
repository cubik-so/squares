import { cva } from 'class-variance-authority'
import React, { createContext, useContext, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { v4 as uuid_v4 } from 'uuid'
import * as RadixTabs from '@radix-ui/react-tabs'
import { cn } from '@utils/cn'
import { Text } from '../text/text'
import type { ReactNode } from 'react'

export type TabContextType = {
    size: 'sm' | 'md' | 'lg'
    className?: string
    id?: string
}

export const TabContext = createContext<TabContextType>({
    size: 'md',
    className: '',
    id: 'tab',
})

const tabVariants = cva('', {
    variants: {
        size: {
            sm: 'pb-[4px]',
            md: 'pb-[8px]',
            lg: 'pb-[8px]',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})
const tabTextVariants = cva('', {
    variants: {
        size: {
            sm: 'b2 md:b3',
            md: 'b2',
            lg: 'b1',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const tabTextContainerVariants = cva('', {
    variants: {
        size: {
            sm: 'p-[8px] md:p-[12px]',
            md: 'p-[8px] md:p-[12px]',
            lg: 'p-[12px] md:p-[16px]',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

const tabListVariants = cva('', {
    variants: {
        size: {
            sm: 'flex flex-row pb-[4px] pt-1 gap-[12px] md:gap-[16px]',
            md: 'flex flex-row pb-[8px] gap-[16px] pt-1 md:gap-[20px]',
            lg: 'flex flex-row pb-[8px] gap-[20px] pt-1 md:gap-[32px]',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

interface TabsProps {
    children: ReactNode
    defaultValue?: number
    size: 'sm' | 'md' | 'lg'
    className?: string
    setActiveTab?: (tab: number) => void
}

type TabListProps = {
    children: ReactNode
    className?: string
}

type TabProps = {
    children: ReactNode
    value: number
    className?: string
}

type TabPanelsProps = {
    children: ReactNode
    className?: string
}

type TabPanelProps = {
    children: ReactNode
    value: number
}

export type SelectedTabContextType = {
    selectedTab: number
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>
    previousTab: number
}

const SelectedTabContext = createContext<SelectedTabContextType | undefined>(undefined)

const Tabs: React.FC<TabsProps> = ({ children, defaultValue, size, className, setActiveTab }) => {
    const [selectedTab, setSelectedTab] = useState<number>(defaultValue ?? 0)
    const [previousTab, setPreviousTab] = useState(0)
    const id = useMemo(() => uuid_v4(), [])

    return (
        <SelectedTabContext.Provider value={{ selectedTab, setSelectedTab, previousTab }}>
            <TabContext.Provider value={{ size, className, id }}>
                <RadixTabs.Root
                    defaultValue={selectedTab.toString()}
                    onValueChange={(value) => {
                        if (setActiveTab) setActiveTab(Number(value))
                        setPreviousTab(selectedTab)
                        setSelectedTab(Number(value))
                    }}
                    className={cn(
                        tabVariants({ size }),
                        className,
                        'md:overflow-x-inherit w-full overflow-y-hidden overflow-x-scroll',
                    )}
                >
                    {children}
                </RadixTabs.Root>
            </TabContext.Provider>
        </SelectedTabContext.Provider>
    )
}

const TabList: React.FC<TabListProps> = ({ children, className }) => {
    const { size } = useContext(TabContext)
    const context = useContext(SelectedTabContext)
    if (!context) {
        throw new Error('TabList must be used within a SelectedTabContext.Provider')
    }
    const tabListStyles = cn(tabListVariants({ size }))

    return (
        <RadixTabs.List
            className={cn(tabListStyles, className)}
            style={{
                position: 'relative',
            }}
        >
            {children}
        </RadixTabs.List>
    )
}

const Tab: React.FC<TabProps> = React.forwardRef<HTMLDivElement, TabProps>(
    ({ children, value, className }, ref: any) => {
        const { size, id } = useContext(TabContext)
        const context = useContext(SelectedTabContext)
        const selectedTab = context?.selectedTab

        const tabStyles = cn(tabTextContainerVariants({ size }))

        return (
            <RadixTabs.Trigger
                value={value.toString()}
                className={`${tabStyles} ${className} relative focus-visible:ring-2 focus-visible:ring-[var(--color-surface-cool-transparent)] focus:rounded-md focus-visible:ring-offset-transparent focus-visible:ring-offset-0 focus-visible:outline-none focus:border-none focus-visible:border-none`}
                ref={ref}
            >
                <Text
                    className={cn(tabTextVariants({ size }))}
                    color={selectedTab === value ? 'primary' : 'tertiary'}
                >
                    {children}
                </Text>
                {selectedTab === value && (
                    <motion.div
                        layoutId={id}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        className={`absolute bottom-[-4px] left-0 bg-[var(--tab-fg-active)] h-[2px] rounded-full w-full`}
                    />
                )}
            </RadixTabs.Trigger>
        )
    },
)

const TabPanels: React.FC<TabPanelsProps> = ({ children, className }) => (
    <div className={cn('w-full', className)}>{children}</div>
)

const TabPanel: React.FC<TabPanelProps> = ({ children, value }) => {
    // get the value of previous tab here
    const context = useContext(SelectedTabContext)
    const previousTab = context?.previousTab

    const isEnteringFromRight = previousTab !== undefined && previousTab < value
    const shouldAnimate = !(previousTab === 0 && value === 0)
    const initialX = isEnteringFromRight ? 10 : -10

    return (
        <RadixTabs.Content value={value.toString()} className="w-full">
            <motion.div
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                initial={shouldAnimate ? { opacity: 0, x: initialX } : { opacity: 1, x: 0 }}
                //  exit={shouldAnimate ? { opacity: 0, x: endingX } : { opacity: 1, x: 0 }}
                transition={{
                    duration: 0.45,
                    ease: [0.25, 0.1, 0.0, 1.0], // Cubic bezier values
                }}
            >
                {children}
            </motion.div>
        </RadixTabs.Content>
    )
}

Tab.displayName = 'Tab'

export { Tabs, Tab, TabList, TabPanels, TabPanel }
