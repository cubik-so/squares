'use client'

import {
    Button,
    SegmentContainer,
    SegmentItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VaulDrawer,
    VaulDrawerContent,
    VaulDrawerOverlay,
    VaulDrawerPortal,
    VaulDrawerTrigger,
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
            <Button variant="primary">Open Drawer</Button>
            <VaulDrawer>
                <VaulDrawerTrigger>
                    <Button variant="primary">Open Drawer</Button>
                </VaulDrawerTrigger>
                <VaulDrawerPortal>
                    <VaulDrawerOverlay />
                    <VaulDrawerContent>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 rounded-t-[10px] bg-white p-4">
                            <div className="mx-auto max-w-md">
                                <p className="mb-2 text-zinc-600">
                                    This component can be used as a replacement for a Dialog on
                                    mobile and tablet devices.
                                </p>
                                <p className="mb-8 text-zinc-600">
                                    It uses{' '}
                                    <a
                                        href="https://www.radix-ui.com/docs/primitives/components/dialog"
                                        className="underline"
                                        target="_blank"
                                    >
                                        Radix&apos;s Dialog primitive
                                    </a>{' '}
                                    under the hood and is inspired by{' '}
                                    <a
                                        href="https://twitter.com/devongovett/status/1674470185783402496"
                                        className="underline"
                                        target="_blank"
                                    >
                                        this tweet.
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="mt-auto border-t border-zinc-200 bg-zinc-100 p-4">
                            <div className="mx-auto flex max-w-md justify-end gap-6">
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://github.com/emilkowalski/vaul"
                                    target="_blank"
                                >
                                    GitHub
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                                <a
                                    className="gap-0.25 flex items-center text-xs text-zinc-600"
                                    href="https://twitter.com/emilkowalski_"
                                    target="_blank"
                                >
                                    Twitter
                                    <svg
                                        fill="none"
                                        height="16"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        width="16"
                                        aria-hidden="true"
                                        className="ml-1 size-3"
                                    >
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </VaulDrawerContent>
                </VaulDrawerPortal>
            </VaulDrawer>
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
