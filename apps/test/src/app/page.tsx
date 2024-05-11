'use client'

import {
    Button,
    Text,
    VaulDrawer,
    VaulDrawerContent,
    VaulDrawerOverlay,
    VaulDrawerPortal,
    VaulDrawerTrigger,
    // VaulDrawerTrigger,
} from '@squaress/ui'
import { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggleDrawer = () => setIsOpen(!isOpen)
    return (
        <main className=" bg-body-surface flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            {/* <VaulDrawerTrigger>
                <button onClick={toggleDrawer}>Open Drawer</button>
            </VaulDrawerTrigger> */}
            <Button onClick={() => setIsOpen(true)}>sdfasf</Button>
        </main>
    )
}
