'use client'

import React from 'react'
import ReactSelect from 'react-select'
import makeAnimated from 'react-select/animated'
import ReactAsyncSelect from 'react-select/async'
import { useMediaQuery } from 'usehooks-ts'
import { v4 as uuidV4 } from 'uuid'

import { CustomComponents } from './custom-components'

import type { MultiValue, SingleValue } from 'react-select'

export type SelectOptionsType = {
    label: string
    value: string
    icon?: string
    disabled?: boolean
    secondaryValue?: string
}

interface Props {
    options: SelectOptionsType[]
    name?: string
    onChange: (
        e: MultiValue<SelectOptionsType> | SingleValue<SelectOptionsType>,
        isMulti?: boolean,
    ) => void
    value?: SelectOptionsType
    size?: 'sm' | 'md' | 'lg'
    isMulti?: boolean
    isError?: boolean
    placeholder?: string
    isSearchable?: boolean
    isClearable?: boolean
    onInputChange?: (newValue: string) => void
    withoutBorder?: boolean
    errorMessage?: string
    loadingMessage?: string
    defaultValue?: SelectOptionsType | undefined
    props?: any
    isDisabled?: boolean
}

export const Select = ({
    options,
    value,
    name,
    onChange,
    isMulti,
    isError,
    placeholder,
    isSearchable,
    onInputChange,
    defaultValue,
    loadingMessage,
    isClearable,
    size = 'sm',
    withoutBorder,
    isDisabled = false,
    props,
}: Props) => {
    const animatedComponents = makeAnimated(CustomComponents as any)
    const isSmallerDevice = useMediaQuery('(max-width: 768px)')
    const randomId = uuidV4()
    return (
        <ReactSelect
            {...props}
            id={name ? name : randomId}
            isMulti={isMulti}
            defaultValue={defaultValue}
            openMenuOnFocus={true}
            components={animatedComponents}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={isDisabled}
            loadingMessage={() => {
                return loadingMessage || 'Loading...'
            }}
            onChange={(e) => {
                if (isMulti) {
                    onChange(e as MultiValue<SelectOptionsType>, isMulti)
                } else {
                    if (e) {
                        onChange(e as SingleValue<SelectOptionsType>, isMulti)
                    }
                }
            }}
            onInputChange={(e, a) => {
                if (a.action === 'input-change' && onInputChange) {
                    onInputChange(e)
                }
            }}
            value={value}
            placeholder={placeholder}
            options={options}
            unstyled={true}
            styles={{
                control: () => ({
                    size: size,
                    isError: isError,
                    withoutBorder: withoutBorder,
                }),
                option: () => ({
                    size: size,
                }),
                singleValue: () => ({
                    size: size,
                }),
                valueContainer: () => ({
                    size: size,
                    withoutBorder: withoutBorder,
                }),
                placeholder: () => ({
                    size: size,
                }),
                dropdownIndicator: () => ({
                    size: isSmallerDevice ? 16 : 20,
                }),
            }}
            className="w-full"
        />
    )
}
// async pops extends props
interface asyncProps extends Props {
    loadOptions: (inputValue: string, callback: any) => void
    isDisabled?: boolean
}
export const AsyncSelect = ({
    options,
    loadOptions,
    value,
    onChange,
    isMulti,
    isError,
    placeholder,
    isSearchable,
    onInputChange,
    defaultValue,
    loadingMessage,
    isClearable,
    isDisabled = false,
    size = 'sm',
}: asyncProps) => {
    const animatedComponents = makeAnimated(CustomComponents as any)
    const randomId = uuidV4()
    const isSmallerDevice = useMediaQuery('(max-width: 768px)')

    return (
        <ReactAsyncSelect
            cacheOptions={true}
            loadOptions={loadOptions}
            id={randomId}
            isMulti={isMulti}
            defaultValue={defaultValue}
            openMenuOnFocus={true}
            components={animatedComponents}
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={isDisabled}
            loadingMessage={() => {
                return loadingMessage || 'Loading...'
            }}
            onChange={(e) => {
                if (isMulti) {
                    onChange(e as MultiValue<SelectOptionsType>, true)
                } else {
                    if (e) {
                        onChange(e as SingleValue<SelectOptionsType>, false)
                    }
                }
            }}
            onInputChange={(e, a) => {
                if (a.action === 'input-change' && onInputChange) {
                    onInputChange(e)
                }
            }}
            value={value}
            placeholder={placeholder}
            options={options}
            unstyled={true}
            styles={{
                control: () => ({
                    size: size,
                    isError: isError,
                }),
                option: () => ({
                    size: size,
                }),
                singleValue: () => ({
                    size: size,
                }),
                valueContainer: () => ({
                    size: size,
                }),
                placeholder: () => ({
                    size: size,
                }),
                dropdownIndicator: () => ({
                    size: isSmallerDevice ? 16 : 20,
                }),
            }}
            className="w-full"
        />
    )
}
