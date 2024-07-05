import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface RadioOption {
    id: string
    value: string
    label: JSX.Element | string
}

interface CustomRadioButtonProps {
    options: RadioOption[]
    defaultValue: string
    name: string
    onChange: (value: string) => void
    className?: string
    value: string
}

export const CustomRadioButton = ({
    options,
    defaultValue,
    name,
    onChange,
    className,
    value,
}: CustomRadioButtonProps) => {
    return (
        <RadioGroup.Root
            name={name}
            defaultValue={defaultValue}
            aria-label={name}
            className={`flex flex-col gap-2.5 ${className}`}
            onValueChange={onChange}
        >
            {options.map((option: RadioOption) => (
                <div
                    key={option.value}
                    className={`flex items-center w-full p-3 rounded-xl ${
                        value === option.value ? 'bg-color-surface-info-transparent' : ''
                    }`}
                >
                    <RadioGroup.Item
                        className="bg-white w-[18px] h-[18px] rounded-full outline-none cursor-pointer border border-color-surface-primary-transparent focus:outline-none focus-visible:outline-none data-[state=checked]:border-color-bg-info-base"
                        value={option.value}
                        id={option.id}
                    >
                        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[10px] after:h-[10px] after:rounded-[50%] after:bg-color-bg-info-base" />
                    </RadioGroup.Item>
                    <label
                        htmlFor={option.id}
                        className={`leading-none pl-[15px] w-full ${
                            value === option.value ? 'text-color-bg-info-base' : 'text-inherit'
                        }`}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </RadioGroup.Root>
    )
}
