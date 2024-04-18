'use client'

import {
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

export default function Home() {
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
        </main>
    )
}
