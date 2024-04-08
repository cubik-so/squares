'use client'
import { Button, Checkbox } from '@squares/ui'

export default function Home() {
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
            <Checkbox
                onCheckedChange={(e) => {
                    console.log(e)
                }}
            />
        </main>
    )
}
