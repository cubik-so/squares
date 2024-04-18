'use client'

import {
    SegmentContainer,
    SegmentItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VerticalTab,
    VerticalTabList,
    VerticalTabPanel,
    VerticalTabPanels,
    VerticalTabs,
} from '@squares/ui'
import { useState } from 'react'

export default function Home() {
    const [firstSegment, setFirstSegment] = useState(1)
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Tabs defaultValue={2} size="sm" className="">
                <TabList>
                    <Tab value={0}>
                        <div className="p-2">TabItem1</div>
                    </Tab>
                    <Tab value={1}>
                        {' '}
                        <div className="p-2">TabItem2</div>
                    </Tab>
                    <Tab value={2}>
                        {' '}
                        <div className="p-2">Tabitem3</div>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel value={0}>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel value={1}>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel value={2}>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <VerticalTabs defaultValue={'one'} size="sm" className="">
                <VerticalTabList>
                    <VerticalTab value={'one'} leftIconName="search">
                        TabItem1
                    </VerticalTab>
                    <VerticalTab value={'two'} leftIconName="search">
                        {' '}
                        TabItem2
                    </VerticalTab>
                    <VerticalTab value={'three'} leftIconName="search">
                        {' '}
                        Tabitem3
                    </VerticalTab>
                </VerticalTabList>
                <VerticalTabPanels className="">
                    <VerticalTabPanel value={'one'}>
                        <Text className="l2" color={'primary'}>
                            one!
                        </Text>
                    </VerticalTabPanel>
                    <VerticalTabPanel value={'two'}>
                        <Text className="l2" color={'primary'}>
                            two!
                        </Text>
                    </VerticalTabPanel>
                    <VerticalTabPanel value={'three'}>
                        <Text className="l2" color={'primary'}>
                            three!
                        </Text>
                    </VerticalTabPanel>
                </VerticalTabPanels>
            </VerticalTabs>

            <SegmentContainer size="md">
                <SegmentItem isActive={firstSegment === 1} onClick={() => setFirstSegment(1)}>
                    Segment Item 1
                </SegmentItem>
                <SegmentItem isActive={firstSegment === 2} onClick={() => setFirstSegment(2)}>
                    Segment Item 2
                </SegmentItem>
                <SegmentItem isActive={firstSegment === 3} onClick={() => setFirstSegment(3)}>
                    Segment Item 3
                </SegmentItem>
                <SegmentItem isActive={firstSegment === 4} onClick={() => setFirstSegment(4)}>
                    Segment Item 4
                </SegmentItem>
                <SegmentItem isActive={firstSegment === 5} onClick={() => setFirstSegment(5)}>
                    Segment Item 5
                </SegmentItem>
            </SegmentContainer>

            {firstSegment === 1 && (
                <Text className="l2" color={'primary'}>
                    three!
                </Text>
            )}
        </main>
    )
}
