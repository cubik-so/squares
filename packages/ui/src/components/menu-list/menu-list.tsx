import React, { createContext, useContext, useMemo, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'
import { v4 as uuid_v4 } from 'uuid'

import Icon from '@/icons'
import { cn } from '../../utils'
import { Text } from '../text/text'
import { VaulDrawer, VaulDrawerContent, VaulDrawerOverlay, VaulDrawerPortal } from '../drawer'

import type { VariantProps } from 'class-variance-authority'
import type { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu'
import type { ReactEventHandler } from 'react'
import type { VaulDrawerProps } from '../drawer'

interface MenuProps {
    children: React.ReactNode
}

const MenuContext = createContext<{
    id: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}>({
    id: 'menu',
    isOpen: false,
    setIsOpen: () => {
        console.log('first')
    },
})
const DrawerMenuContext = createContext<{
    id: string
    isOpen: boolean | undefined
    setIsOpen: ((open: boolean) => void) | undefined
}>({
    id: 'menu',
    isOpen: false,
    setIsOpen: () => {
        console.log('first')
    },
})

const SubMenuContext = createContext<{
    id: string
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}>({
    id: 'menu',
    isOpen: false,
    setIsOpen: () => {
        console.log('first')
    },
})

export const Menu = ({ children }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const id = useMemo(() => uuid_v4(), [])
    return (
        <MenuContext.Provider value={{ id, isOpen, setIsOpen }}>
            <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
                {children}
            </DropdownMenu.Root>
        </MenuContext.Provider>
    )
}

export const DrawerMenu = ({ open, children, onOpenChange, ...props }: VaulDrawerProps) => {
    const id = useMemo(() => uuid_v4(), [])

    return (
        <DrawerMenuContext.Provider value={{ id, isOpen: open, setIsOpen: onOpenChange }}>
            <VaulDrawer open={open} onOpenChange={onOpenChange} {...props}>
                {children}
            </VaulDrawer>
        </DrawerMenuContext.Provider>
    )
}

interface MenuButtonProps {
    children: React.ReactNode
    props?: React.ForwardRefExoticComponent<
        DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>
    >
}
export const MenuButton = ({ children, props }: MenuButtonProps) => {
    return (
        <DropdownMenu.Trigger
            className="focus-visible:ring-4 focus-visible:ring-[var(--color-surface-cool-transparent)] focus:!text-[var(--button-primary-text-focused)] focus:rounded-lg focus-visible:ring-offset-transparent focus-visible:ring-offset-1 focus-visible:outline-none focus:border-none focus-visible:border-none"
            {...props}
        >
            {children}
        </DropdownMenu.Trigger>
    )
}

interface MenuListProps {
    children: React.ReactNode
    align?: 'end' | 'start' | 'center'
}

export const MenuList = ({ children, align = 'end' }: MenuListProps) => {
    const { isOpen } = useContext(MenuContext)

    return (
        <AnimatePresence>
            {isOpen && (
                <DropdownMenu.Portal
                    forceMount
                    container={document.getElementById('popover-portal')}
                >
                    <DropdownMenu.Content
                        className="py-2 min-w-[200px] md:min-w-[220px] shadow-xl border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] flex flex-col gap-1 md:gap-2"
                        sideOffset={10}
                        align={align}
                        asChild
                    >
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
                        >
                            {children}
                        </motion.div>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            )}
        </AnimatePresence>
    )
}
export const DrawerMenuList = ({ children }: MenuListProps) => {
    return (
        <VaulDrawerPortal>
            <VaulDrawerOverlay />
            <VaulDrawerContent>
                <div className="py-3 pb-8 min-w-[220px] min-h-[20vh] shadow-lg rounded-xl will-change-[opacity,transform] flex flex-col gap-2">
                    {children}
                </div>
            </VaulDrawerContent>
        </VaulDrawerPortal>
    )
}

export const MenuItemVariants = cva(
    'relative p-2 mx-2 focus-visible:outline-none w-[-webkit-fill-available]',
    {
        variants: {
            variant: {
                primary:
                    'text-[var(--menu-list-item-fg-default)] color-[var(--menu-list-item-fg-default)] stroke-[var(--menu-list-item-icon)] hover:bg-[var(--menu-list-item-surface-hovered)] hover:rounded-lg hover:text-[var(--menu-list-item-fg-hovered)] hover:color-[var(--menu-list-item-fg-hovered)] hover:stroke-[var(--menu-list-item-hovered)]',
                negative:
                    'text-[var(--color-bg-negative-base)] color-[var(--color-bg-negative-base)]  stroke-[var(--color-bg-negative-base)] hover:bg-[var(--color-surface-negative-transparent)] hover:rounded-lg hover:text-[var(--color-bg-negative-base)] hover:color-[var(--color-bg-negative-base)]  hover:stroke-[var(--color-bg-negative-base)]',
                positive:
                    'text-[var(--color-bg-positive-emphasis)] color-[var(--color-bg-positive-base)]  stroke-[var(--color-bg-positive-base)] hover:bg-[var(--color-surface-positive-transparent)] hover:rounded-lg hover:text-[var(--color-bg-positive-emphasis)] hover:color-[var(--color-bg-positive-base)]  hover:stroke-[var(--color-bg-positive-base)]',
                caution:
                    'text-[var(--color-bg-caution-emphasis)] color-[var(--color-bg-caution-base)]  stroke-[var(--color-bg-caution-base)] hover:bg-[var(--color-surface-caution-transparent)] hover:rounded-lg hover:text-[var(--color-bg-caution-emphasis)] hover:color-[var(--color-bg-caution-base)]  hover:stroke-[var(--color-bg-caution-base)]',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
)
export const iconColorVariantHovered = cva('', {
    variants: {
        variant: {
            primary: 'var(--menu-list-item-hovered)',
            negative: 'var(--color-bg-negative-base)',
            positive: 'var(--color-bg-positive-base)',
            caution: 'var(--color-bg-caution-base)',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})
export const iconColorVariantDefault = cva('', {
    variants: {
        variant: {
            primary: 'var(--menu-list-item-icon)',
            negative: 'var(--color-bg-negative-base)',
            positive: 'var(--color-bg-positive-emphasis)',
            caution: 'var(--color-bg-caution-emphasis)',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

interface MenuItemProps extends VariantProps<typeof MenuItemVariants> {
    children?: React.ReactNode
    text: string
    leftIcon?: string
    onClick?: (e?: any) => void
    isLoading?: boolean
    className?: string
}

export const MenuItem = ({
    children,
    text,
    leftIcon,
    onClick,
    isLoading,
    variant = 'primary',
}: MenuItemProps) => {
    const controls = useAnimationControls()
    const isMobileDevice = useMediaQuery('(max-width: 768px)')
    const [hoveredItem, setHoveredItem] = useState<null | string>()
    const id = useMemo(() => uuid_v4(), [])

    const itemProps: {
        onClick?: () => void
        className: string
        onSelect?: (event: Event) => void // Define onSelect property
    } = {
        onClick: isLoading
            ? () => {
                  console.log('first')
              }
            : () => {
                  onClick && onClick()
                  controls.start('loading')
              },
        className: cn(
            isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
            MenuItemVariants({ variant }),
            '',
        ),
    }

    if (children) {
        itemProps.onSelect = (e) => e.preventDefault()
    }

    return (
        <DropdownMenu.Item
            onMouseEnter={() => setHoveredItem(id)}
            onMouseLeave={() => setHoveredItem(null)}
            {...itemProps}
        >
            <div className="flex group justify-between transform transition-all active:scale-95">
                <div className="flex gap-[10px] items-center ">
                    {leftIcon && (
                        <Icon
                            name={leftIcon}
                            //  color="inherit"
                            color={cn(
                                hoveredItem === id
                                    ? iconColorVariantHovered({ variant })
                                    : iconColorVariantDefault({ variant }),
                            )}
                            strokeWidth={1.8}
                            height={isMobileDevice ? 18 : 20}
                            width={isMobileDevice ? 18 : 20}
                        />
                    )}
                    <Text className="l1 md:l2" color={'inherit'}>
                        {text}
                    </Text>
                    {isLoading && (
                        <Icon
                            name={'spinner'}
                            color="inherit"
                            height={isMobileDevice ? 18 : 20}
                            width={isMobileDevice ? 18 : 20}
                            strokeWidth={1.8}
                            className={cn('animate-spin')}
                        />
                    )}
                </div>
                {children}
            </div>
        </DropdownMenu.Item>
    )
}
export const DrawerMenuItem = ({
    children,
    text,
    leftIcon,
    onClick,
    isLoading,
    variant = 'primary',
}: MenuItemProps) => {
    const [hoveredItem, setHoveredItem] = useState<null | string>()
    const id = useMemo(() => uuid_v4(), [])
    const { setIsOpen } = useContext(DrawerMenuContext)

    const itemProps: {
        onClick?: () => void
        className: string
        onSelect?: ReactEventHandler<HTMLButtonElement> | undefined
    } = {
        onClick: isLoading
            ? () => {
                  console.log('first')
              }
            : onClick,
        className: cn(
            isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
            MenuItemVariants({ variant }),
            '',
        ),
    }

    if (children) {
        itemProps.onSelect = (e) => e.preventDefault()
    }

    const onClickHandler = () => {
        console.log('on click triggered')
        onClick && onClick()
        setIsOpen && setIsOpen(false)
    }

    return (
        <button
            onMouseEnter={() => setHoveredItem(id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={onClickHandler}
            className={cn(itemProps.className, 'mx-4 py-2')}
            onSelect={itemProps.onSelect}
        >
            <div className="flex justify-between w-full">
                <div className="flex gap-[10px] items-center">
                    {leftIcon && (
                        <Icon
                            name={leftIcon}
                            strokeWidth={2}
                            color={cn(
                                hoveredItem === id
                                    ? iconColorVariantHovered({ variant })
                                    : iconColorVariantDefault({ variant }),
                            )}
                            height={20}
                            width={20}
                        />
                    )}
                    <Text className="b2 md:l2" color={'inherit'}>
                        {text}
                    </Text>
                    {isLoading && (
                        <Icon
                            name={'spinner'}
                            color="inherit"
                            height={20}
                            width={20}
                            strokeWidth={2}
                            className={cn('animate-spin')}
                        />
                    )}
                </div>
                {children}
            </div>
        </button>
    )
}

interface SubMenuProps {
    children: React.ReactNode
}

export const SubMenu = ({ children }: SubMenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const id = useMemo(() => uuid_v4(), [])

    return (
        <SubMenuContext.Provider value={{ id, isOpen, setIsOpen }}>
            <DropdownMenu.Sub open={isOpen} onOpenChange={setIsOpen}>
                {children}
            </DropdownMenu.Sub>
        </SubMenuContext.Provider>
    )
}

interface SubMenuButtonProps {
    children: React.ReactNode
    leftIcon?: string
    className?: string
}

export const SubMenuButton = ({ children, leftIcon, className }: SubMenuButtonProps) => {
    return (
        <DropdownMenu.SubTrigger
            className={cn(
                'relative cursor-pointer hover:bg-[var(--menu-list-item-surface-hovered)] text-[var(--menu-list-item-fg-default)] hover:text-[var(--menu-list-item-fg-hovered)] hover:rounded-lg hover:stroke-[var(--menu-list-item-hovered)] stroke-[var(--menu-list-item-icon)] focus-visible:outline-none p-2 py-2 mx-2',
                className,
            )}
        >
            <div className="flex justify-between items-center ">
                <div className="flex gap-[10px] items-center ">
                    {leftIcon && (
                        <Icon
                            name={leftIcon}
                            color="inherit"
                            height={20}
                            width={20}
                            strokeWidth={2}
                        />
                    )}
                    <Text className="l1 md:l2">{children}</Text>
                </div>

                <Icon name="chevronRight" height={20} width={20} color="inherit" strokeWidth={2} />
            </div>
        </DropdownMenu.SubTrigger>
    )
}

interface SubMenuListProps {
    children: React.ReactNode
}

export const SubMenuList = ({ children }: SubMenuListProps) => {
    const { isOpen } = useContext(SubMenuContext)
    return (
        <AnimatePresence>
            {isOpen && (
                <DropdownMenu.Portal forceMount>
                    <DropdownMenu.SubContent
                        className="py-2 min-w-[180px] md:min-w-[240px] shadow-xl border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] flex flex-col gap-2"
                        sideOffset={20}
                        asChild
                    >
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
                        >
                            {children}
                        </motion.div>
                    </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
            )}
        </AnimatePresence>
    )
}

// const SubMenuList = ({ children }: SubMenuListProps) => {
//   return (
//     <DropdownMenu.Portal>
//       <DropdownMenu.SubContent
//         className="min-w-[220px] border border-[var(--menu-list-item-border)] bg-[var(--menu-list-surface)] rounded-xl will-change-[opacity,transform] p-2 mx-2"
//         sideOffset={20}
//       >
//         {children}
//       </DropdownMenu.SubContent>
//     </DropdownMenu.Portal>
//   );
// };

export const MenuDivider = ({ className }: { className?: string }) => {
    return (
        <DropdownMenu.Separator
            className={cn('border-t-[1px] border-[var(--color-border-primary-subdued)]', className)}
        />
    )
}

interface SubMenuListProps {
    children: React.ReactNode
}
