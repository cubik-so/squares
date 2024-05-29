// src/stories/VerticalTabs.stories.tsx

import React from 'react'
import {
    VerticalTab,
    VerticalTabList,
    VerticalTabPanel,
    VerticalTabPanels,
    VerticalTabs,
} from '@squaress/ui/tabs'
import type { Meta, StoryObj } from '@storybook/react'
import type { TabsProps } from '@squaress/ui/tabs'

const meta: Meta<TabsProps> = {
    title: 'Components/VerticalTabs',
    component: VerticalTabs,
}

export default meta

type Story = StoryObj<TabsProps>

export const Default: Story = {
    args: {
        defaultValue: 'tab1',
        size: 'md',
        className: '',
        children: (
            <>
                <VerticalTabList>
                    <VerticalTab value="tab1" leftIconName="search">
                        Tab 1
                    </VerticalTab>
                    <VerticalTab value="tab2" leftIconName="search">
                        Tab 2
                    </VerticalTab>
                    <VerticalTab value="tab3" leftIconName="search">
                        Tab 3
                    </VerticalTab>
                </VerticalTabList>
                <VerticalTabPanels>
                    <VerticalTabPanel value="tab1">Content 1</VerticalTabPanel>
                    <VerticalTabPanel value="tab2">Content 2</VerticalTabPanel>
                    <VerticalTabPanel value="tab3">Content 3</VerticalTabPanel>
                </VerticalTabPanels>
            </>
        ),
    },
}
