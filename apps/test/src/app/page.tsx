'use client'
import { Button } from '@squares/ui'
import Image from 'next/image'

export default function Home() {
    return (
        <main className=" flex min-h-screen flex-col items-center justify-between p-24">
            <Button variant={'primary'} size={'2xl'} loading={true} loadingText="something">
                somethingss
            </Button>
        </main>
    )
}
