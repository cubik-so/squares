'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { components } from 'react-select'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import { AvatarLabelGroup } from '../avatar/avatar-label-group'
import { Text } from '../text/text'
import { Spinner } from '../spinner/spinner'
import type { GroupBase, Options } from 'react-select'
// @ts-ignore
import type { SelectComponents } from 'react-select/dist/declarations/src/components'

export type SelectOptionsType = {
    label: string
    value: string
    icon?: string
    disabled?: boolean
    secondaryValue?: string
}

const menuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 5, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

export const InputFieldVariants = {
    variants: {
        size: {
            md: 'min-h-[36.4px] md:min-h-[38.4px]',
            sm: 'min-h-[32.4px] md:min-h-[34.4px]',
        },
    },
}

export const OptionVariants = {
    variants: {
        size: {
            md: 'sm',
            sm: 'xs',
        },
    },
}

export const CustomComponents: Partial<
    SelectComponents<Options<SelectOptionsType>, boolean, GroupBase<Options<SelectOptionsType>>>
> = {
    // The wrapper around the entire select component.
    SelectContainer: (props: any) => {
        return (
            <components.SelectContainer {...props}>
                <AnimatePresence>{props.children}</AnimatePresence>
            </components.SelectContainer>
        )
    },
    // The second highest level wrapper around the components. It is responsible for the positioning of the ValueContainer and IndicatorsContainer. It is followed by the Menu.
    Control: (props: any) => {
        const size = props.getStyles('control', props).size as 'sm' | 'md' // this is a workaround for passing size from styles to components
        const isError = props.getStyles('control', props).isError as boolean
        const withoutBorder = props.getStyles('control', props).withoutBorder as boolean

        const baseClasses = withoutBorder ? '' : 'z-1 px-0 w-full rounded-[8px] transition-all'
        const defaultClasses = withoutBorder
            ? ''
            : 'bg-form-input-surface-default text-form-input-fg-default hover:text-form-input-fg-hovered border border-form-input-border-default hover:ring-4 ring-color-surface-primary-transparent hover:bg-form-input-surface-hovered'
        const focusedClasses = withoutBorder
            ? ''
            : 'border border-color-border-primary-base ring-4 ring-color-surface-primary-transparent bg-form-input-surface-focused text-form-input-fg-focused'
        const disabledClasses = withoutBorder
            ? ''
            : 'border  border-form-input-surface-default bg-form-input-surface-disabled '
        const errorClasses = withoutBorder
            ? ''
            : 'border border-form-input-border-error hover:border-form-input-border-error ring-4 !ring-color-surface-negative-transparent bg-form-input-surface-error text-form-input-fg-error'

        let classes = baseClasses
        if (props.isFocused) {
            classes += ` ${focusedClasses}`
        } else if (props.isDisabled) {
            classes += ` ${disabledClasses}`
        } else {
            classes += ` ${defaultClasses}`
        }
        if (isError) {
            classes += ` ${errorClasses}`
        }
        return (
            <div className={classes}>
                <components.Control {...props}>
                    <div
                        className={cn(
                            'flex w-full flex-row items-center',
                            InputFieldVariants.variants.size[size],
                        )}
                    >
                        {props.children}
                    </div>
                </components.Control>
            </div>
        )
    },
    Menu: (props: any) => {
        return (
            props.selectProps.menuIsOpen && (
                <components.Menu {...props}>
                    <motion.div
                        key={props.selectProps.id}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="shadow-lg border border-color-border-primary-base rounded-xl z-10 bg-menu-surface"
                    >
                        {props.children}
                    </motion.div>
                </components.Menu>
            )
        )
    },
    MenuList: (props: any) => (
        <div
            // initial="hidden"
            // animate="visible"
            // exit="hidden"
            // variants={menuVariants}
            // transition={{ duration: 0.1 }}
            className="shadow-lg max-h-48 md:max-h-64 overflow-y-scroll md:overflow-hidden rounded-xl bg-menu-list-surface h-full w-full p-1"
        >
            <components.MenuList {...props} />
        </div>
    ),
    //  Type definition is not correct. Its working fine
    Option: (props: any) => {
        const size = props.getStyles('option', props).size as 'sm' | 'md'
        return (
            <div
                className="cursor-pointer hover:bg-menu-list-item-surface-hovered text-menu-list-item-fg-default hover:text-menu-list-item-fg-hovered hover:rounded-lg hover:stroke-menu-list-item-hovered stroke-menu-list-item-icon focus-visible:outline-none p-2 py-2 flex flex-row items-center transform scale-95"
                {...props.innerProps}
                {...props.innerRef}
            >
                {props.data.icon ? (
                    <AvatarLabelGroup
                        size={cn('', OptionVariants.variants.size[size]) as 'xs' | 'sm'}
                        shape="circle"
                        avatarSrc={props.data.icon ? props.data.icon : undefined}
                        title={props.data.label ? props.data.label : undefined}
                    />
                ) : (
                    <Text className="b2 md:l1" color={'inherit'}>
                        {props.label}
                    </Text>
                )}
                {props.data?.secondaryValue && (
                    <Text className="l2" color={'tertiary'}>
                        {props.data.secondaryValue}
                    </Text>
                )}
            </div>
        )
    },
    LoadingMessage: (props: any) => {
        return (
            <components.LoadingMessage {...props}>
                <Text className="l2 py-8" color={'secondary'}>
                    Searching...
                </Text>
            </components.LoadingMessage>
        )
    },
    NoOptionsMessage: (props: any) => {
        return (
            <components.LoadingMessage {...props}>
                <Text className="l2 py-8" color={'secondary'}>
                    No Options Found
                </Text>
            </components.LoadingMessage>
        )
    },
    LoadingIndicator: (props: any) => {
        return (
            <AnimatePresence>
                {props.selectProps.isLoading && (
                    <motion.div
                        layoutId={props.selectProps.id}
                        // animate opacity
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="transform translate-x-[-4px] transition-all p-1 rounded-md "
                    >
                        <Spinner size="sm" />
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    DropdownIndicator: (props: any) => {
        return (
            <AnimatePresence>
                {!props.selectProps.isLoading && (
                    <motion.div
                        layoutId={props.selectProps.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <components.DropdownIndicator {...props}>
                            <div className="transform translate-x-[-4px] transition-all p-1 rounded-md hover:bg-color-surface-primary-transparent active:scale-95">
                                <Icon
                                    name="chevron-down"
                                    width={
                                        Number(props.getStyles('dropdownIndicator', props).size) ||
                                        20
                                    }
                                    height={
                                        Number(props.getStyles('dropdownIndicator', props).size) ||
                                        20
                                    }
                                    strokeWidth={2}
                                    color="var(--form-input-fg-default)"
                                />
                            </div>
                        </components.DropdownIndicator>
                    </motion.div>
                )}
            </AnimatePresence>
        )
    },
    Placeholder: (props: any) => {
        const size = props.getStyles('placeholder', props).size as 'sm' | 'md'
        return (
            <components.Placeholder {...props}>
                <Text
                    className={cn(
                        'l1 top-0 absolute ps-2 flex items-center',
                        InputFieldVariants.variants.size[size],
                    )}
                    color="placeholder"
                >
                    {props.children}
                </Text>
            </components.Placeholder>
        )
    },
    Input: (props: any) => {
        if (props.isHidden) {
            return <components.Input {...props} />
        } else if (props.isMulti) {
            return (
                <div className="px-2 flex items-center">
                    <components.Input {...props} />
                </div>
            )
        } else {
            return (
                <div className="ps-2 ">
                    <components.Input {...props} />
                </div>
            )
        }
    },
    ValueContainer: (props: any) => {
        const size = props.getStyles('valueContainer', props).size as 'sm' | 'md'
        return (
            <div
                className={cn(
                    'w-full ps-2 py-1 flex flex-row items-center overflow-scroll no-scrollbar',
                    InputFieldVariants.variants.size[size],
                )}
            >
                <components.ValueContainer {...props} className="flex flex-wrap" />
            </div>
        )
    },
    //  Type definition is not correct. Its working fine
    SingleValue: (props: any) => {
        const size = props.getStyles('singleValue', props).size as 'sm' | 'md'
        return (
            <components.SingleValue {...props}>
                <AnimatePresence>
                    <motion.div
                        key={props.data?.value}
                        initial={{ opacity: 0, y: -5, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 0.9 }}
                        exit={{ opacity: 0, y: 5, scale: 0.85 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            'text-color-fg-primary-depth flex items-center absolute overflow-visible top-0 bottom-0 px-1',
                            InputFieldVariants.variants.size[size],
                        )}
                    >
                        {props.data?.icon ? (
                            <AvatarLabelGroup
                                size={cn('', OptionVariants.variants.size[size]) as 'xs' | 'sm'}
                                shape="circle"
                                avatarSrc={props.data.icon}
                                title={props.data.label}
                            />
                        ) : (
                            <Text className="b2 md:l1 px-1" color={'inherit'}>
                                {props.data?.label ? props.data.label : ''}
                            </Text>
                        )}
                    </motion.div>
                </AnimatePresence>
            </components.SingleValue>
        )
    },
    MultiValueContainer: (props: any) => {
        return (
            <AnimatePresence>
                <motion.div
                    key={props.data.label}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="w-fit bg-tag-subtle-surface-default mr-2 my-1 rounded-md px-2 py-1 flex gap-1"
                >
                    <components.MultiValueContainer {...props} />
                </motion.div>
            </AnimatePresence>
        )
    },
    MultiValue: (props: any) => {
        return <components.MultiValue {...props} className="flex items-center gap-1" />
    },
    MultiValueLabel: (props: any) => {
        return (
            <Text className="l2" color="primary">
                {props.children}
            </Text>
        )
    },
    MultiValueRemove: (props: any) => (
        <div>
            <components.MultiValueRemove {...props}>
                <Icon name="cross" color={'var(--color-fg-primary-base)'} width={18} height={18} />
            </components.MultiValueRemove>
        </div>
    ),
}
