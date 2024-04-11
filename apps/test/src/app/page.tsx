'use client'
import { Button, TitleWithIcon } from '@squares/ui'

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
            <TitleWithIcon text="asdfasdf" icon="plus" size={'2xl'} iconColor="#000" />
            <TitleWithIcon text="asdfasdf" icon="plus" size={'xl'} iconColor="#000" />
            <TitleWithIcon text="asdfasdf" icon="plus" size={'lg'} iconColor="#000" />
            <TitleWithIcon text="asdfasdf" icon="plus" size={'md'} iconColor="#000" />
            <TitleWithIcon text="asdfasdf" icon="plus" size={'sm'} iconColor="#000" />
            <TitleWithIcon text="asdfasdf" icon="plus" size={'xs'} iconColor="#000" />
        </main>
    )
}
