'use client'

import { Avatar } from '@squaress/ui'
import { useState } from 'react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className=" bg-body-surface flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <div className="flex flex-wrap items-center justify-start gap-7">
                <Avatar
                    variant="circle"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="xs"
                    iconName="infoCircle"
                />
                <Avatar
                    variant="circle"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    iconName="infoCircle"
                    size="sm"
                />
                <Avatar
                    variant="circle"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="md"
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
                    variant="circle"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="xl"
                    iconName="infoCircle"
                />
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
                    iconName="infoCircle"
                />
            </div>
            <div className="flex flex-wrap items-center justify-start gap-7">
                <Avatar
                    variant="square"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="xs"
                    iconName="infoCircle"
                />
                <Avatar
                    variant="square"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="sm"
                    iconName="infoCircle"
                />
                <Avatar
                    variant="square"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="md"
                    iconName="infoCircle"
                />
                <Avatar
                    variant="square"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="lg"
                    iconName="infoCircle"
                />
                <Avatar
                    variant="square"
                    src="https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg"
                    alt="Image"
                    size="xl"
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
                    iconName="infoCircle"
                />
            </div>
        </main>
    )
}
