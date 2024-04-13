'use client'

import { CubikTable } from '@squares/ui'

const columns = [
    {
        accessorKey: 'id', // accessor is the "key" in the data
        header: () => 'ID',
        cell: (info: any) => info.getValue(),
    },
    {
        accessorKey: 'name',
        header: () => 'Name',
        cell: (info: any) => info.getValue(),
    },
    {
        accessorKey: 'age',
        header: () => 'Age',
        cell: (info: any) => info.getValue(),
    },
]

// Create some mock data
const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Carol', age: 28 },
]

export default function Home() {
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <CubikTable columns={columns} data={data} />
        </main>
    )
}
