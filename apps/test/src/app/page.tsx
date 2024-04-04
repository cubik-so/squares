'use client'
import { Button } from '@squares/ui'
import { Button } from '@squares/ui/'

import Image from 'next/image'

export default function Home() {
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button size="lg" variant="outline">
                asdfsa
            </Button>
            <Button size="lg" variant="primary" disabled>
                asdfsa
            </Button>
            <Icon name="plus" />
            {/* <Button variant={'success'} size={'2xl'} loading={true} loadingText="something">
                somethingss
            </Button> */}
        </main>
    )
}
