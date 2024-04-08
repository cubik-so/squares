'use client'
import { Button, MyConfetti } from '@squares/ui'
import { useWindowSize } from 'usehooks-ts'

export default function Home() {
    const { height, width } = useWindowSize()
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button size="lg" variant="outline" leftIconName="plus">
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

            <MyConfetti height={height} width={width} />
        </main>
    )
}
