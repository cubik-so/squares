'use client'
import { Avatar, Button } from '@squares/ui'

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
            <Avatar
                variant="circle"
                src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                alt="Image"
                size="2xl"
                iconName="infoCircle"
            />
            <Avatar
                variant="circle"
                src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                alt="Image"
                size="lg"
                iconName="infoCircle"
            />

            <Avatar
                variant="square"
                src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                alt="Image"
                size="2xl"
                iconName="infoCircle"
            />
            <Avatar
                variant="square"
                src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                alt="Image"
                size="lg"
                iconName="infoCircle"
            />
        </main>
    )
}
