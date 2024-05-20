// src/components/VaulDrawer.stories.tsx

import React, { useState } from 'react'
import {
    VaulDrawer,
    VaulDrawerContent,
    VaulDrawerOverlay,
    VaulDrawerPortal,
    VaulDrawerTrigger,
} from '@squaress/ui/drawer'
import type { Meta, StoryObj } from '@storybook/react'
import type { VaulDrawerProps } from '@squaress/ui/drawer'

export default {
    title: 'Components/VaulDrawer',
    component: VaulDrawer,
    argTypes: {
        open: {
            control: 'boolean',
            defaultValue: false,
        },
        onOpenChange: {
            action: 'onOpenChange',
        },
    },
} as Meta<typeof VaulDrawer>

const Template: StoryObj<VaulDrawerProps> = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.open)

        const handleOpenChange = (open: boolean) => {
            console.log(open)
            setIsOpen(open)
            args.onOpenChange && args.onOpenChange(open)
        }

        return (
            <>
                <button
                    className="p-2 bg-blue-500 text-white rounded"
                    onClick={() => args.open === true}
                >
                    Open Drawer
                </button>
                <VaulDrawer open={true} onOpenChange={handleOpenChange} {...args}>
                    <VaulDrawerPortal>
                        <VaulDrawerOverlay />
                        <VaulDrawerContent className="p-4">
                            <h2 className="text-xl">Drawer Content</h2>
                            <p>
                                This is the content of the drawer. You can put any React component
                                here.
                            </p>
                        </VaulDrawerContent>
                    </VaulDrawerPortal>
                </VaulDrawer>
            </>
        )
    },
}

export const Default: StoryObj<VaulDrawerProps> = {
    ...Template,
    args: {
        open: false,
    },
}

export const WithContent: StoryObj<VaulDrawerProps> = {
    ...Template,
    args: {
        open: true,
        children: (
            <div className="p-4">
                <h2 className="text-xl">Drawer Content</h2>
                <p>This is the content of the drawer. You can put any React component here.</p>
            </div>
        ),
    },
}
