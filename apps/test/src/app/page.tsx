'use client'
import { Button, Modal, ModalHeader } from '@squares/ui'
import { useState } from 'react'

export default function Home() {
    const [open, setOpen] = useState(false)
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button size="lg" variant="outline" leftIconName="plus" onClick={() => setOpen(true)}>
                asdfsa
            </Button>
            <Button
                size="lg"
                variant="primary"
                isLoading={true}
                leftIconName="plus"
                loadingText="kladjsf aksdh"
                rightIconName="plus"
            >
                asdfsa
            </Button>

            {open && (
                <Modal open={open} className="" onClose={() => setOpen(false)} size="lg">
                    <ModalHeader heading="jkhjhjhk" />
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                </Modal>
            )}

            {/* <Button variant={'success'} size={'2xl'} loading={true} loadingText="something">
                somethingss
            </Button> */}
        </main>
    )
}
