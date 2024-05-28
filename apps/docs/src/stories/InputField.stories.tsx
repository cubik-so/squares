import React from 'react'
import {
    InputField,
    InputFieldContainer,
    InputLeftElement,
    InputRightElement,
} from '@squaress/ui/input-field'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof InputField> = {
    title: 'Components/InputField',
    component: InputField,
    argTypes: {
        isError: {
            control: 'boolean',
        },
        isDisabled: {
            control: 'boolean',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md'],
        },
        placeholder: {
            control: 'text',
        },
        leftElement: {
            control: 'text',
        },
        rightElement: {
            control: 'text',
        },
    },
}

export default meta

type Story = StoryObj<
    typeof InputField & {
        leftElement?: React.ReactNode
        rightElement?: React.ReactNode
    }
>

const Template = (args: any) => (
    <InputFieldContainer
        size={args.size}
        isError={args.isError}
        isDisabled={args.isDisabled}
        className={'undefined'}
        style={undefined}
    >
        {args.leftElement && (
            <InputLeftElement isDisabled={false}>{args.leftElement}</InputLeftElement>
        )}
        <InputField {...args} />
        {args.rightElement && (
            <InputRightElement isDisabled={false} className={''}>
                {args.rightElement}
            </InputRightElement>
        )}
    </InputFieldContainer>
)

export const Default: Story = {
    render: Template,
    args: {
        size: 'md',
        isError: false,
        isDisabled: false,
        placeholder: 'Enter text',
    },
}

export const Disabled: Story = {
    render: Template,
    args: {
        size: 'md',
        isError: false,
        isDisabled: true,
        placeholder: 'Enter text',
    },
}

export const Error: Story = {
    render: Template,
    args: {
        size: 'md',
        isError: true,
        isDisabled: false,
        placeholder: 'Enter text',
    },
}

export const WithLeftElement: Story = {
    render: Template,
    args: {
        size: 'md',
        isError: false,
        isDisabled: false,
        placeholder: 'Enter text',
        leftElement: '🔍',
    },
}

export const WithRightElement: Story = {
    render: Template,
    args: {
        size: 'md',
        isError: false,
        isDisabled: false,
        placeholder: 'Enter text',
        rightElement: '✔️',
    },
}

export const WithBothElements: Story = {
    render: Template,
    args: {
        size: 'md',
        isError: false,
        isDisabled: false,
        placeholder: 'Enter text',
        leftElement: '🔍',
        rightElement: '✔️',
    },
}
