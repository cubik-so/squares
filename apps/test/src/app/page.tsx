'use client'
import { Alert, Button, Modal, ModalHeader } from '@squares/ui'
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
                <Modal open={open} className="" onClose={() => setOpen(false)} dialogSize="lg">
                    <ModalHeader heading="jkhjhjhk" closeIcon={false} />
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                    <p>askjdhfjkahsdf</p>
                </Modal>
            )}
            <Alert
                description="This is a description"
                iconName="alert-info-circle"
                state={'info'}
                variant="default"
            />
            <Alert
                description="This is a description"
                iconName="alert-info-circle"
                state={'info'}
                variant="textOnly"
            />
            <Alert
                description="This is a description"
                iconName="alert-info-circle"
                state={'default'}
                variant="leftOutline"
            />
            <Alert
                description="This is a description"
                iconName="alert-info-circle"
                state={'innovative'}
                variant="border"
            />

            <Alert title="hello world" iconName="alert-info-circle" state={'success'} />
            <Alert
                title="hello world"
                description="This is a description"
                iconName="alert-info-circle"
                state={'error'}
            >
                <Button
                    variant={'danger'}
                    className="!h-fit !bg-transparent !p-0"
                    rightIconName="arrow-right"
                    size="sm"
                >
                    Check this
                </Button>
            </Alert>
        </main>
    )
}
