'use client'

import { Button, CubikTable } from '@squaress/ui'

interface DataType {
    id: number
    name: string
    age: number
}

const data: DataType[] = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Doe', age: 32 },
    { id: 3, name: 'Jane Doe', age: 32 },
    { id: 4, name: 'Jane Doe', age: 32 },
]

const columns = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Name',
        accessorKey: 'name',
    },
    {
        header: 'Age',
        accessorKey: 'age',
    },
]

export default function Home() {
    return (
        <main className=" bg-body-surface flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Button>button</Button>
            {/* <div className="flex flex-col gap-3">
                <AvatarGroup
                    size="xs"
                    shape="square"
                    variant="squared-horizontal"
                    avatars={[
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                    ]}
                />
                <AvatarGroup
                    size="sm"
                    shape="square"
                    variant="squared-horizontal"
                    avatars={[
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                    ]}
                />
                <AvatarGroup
                    shape="square"
                    variant="squared-horizontal"
                    size="md"
                    avatars={[
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                    ]}
                />
                <AvatarGroup
                    shape="square"
                    size="lg"
                    variant="squared-horizontal"
                    avatars={[
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                    ]}
                />
                <AvatarGroup
                    shape="square"
                    size="xl"
                    variant="squared-horizontal"
                    avatars={[
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                    ]}
                />
                <AvatarGroup
                    shape="square"
                    size="2xl"
                    variant="squared-horizontal"
                    avatars={[
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                        {
                            src: 'https://pbs.twimg.com/profile_images/1694008102709055488/ESkPDhR-_400x400.jpg',
                            alt: 'sample image',
                        },
                    ]}
                />
            </div> */}
            <CubikTable columns={columns} data={data} showHeader={true} />
        </main>
    )
}
