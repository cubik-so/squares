'use client'

import { Button, Modal } from '@squaress/ui'
import { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className=" bg-body-surface flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button
                onClick={() => {
                    setIsOpen(true)
                    console.log('button comp call')
                }}
            >
                button
            </Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quam natus
                    porro dolore molestias debitis voluptatem autem recusandae blanditiis
                    voluptatibus, excepturi harum quidem itaque? Eos recusandae minima excepturi
                    voluptates. Eveniet!
                </div>
            </Modal>
        </main>
    )
}
