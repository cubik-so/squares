// src/components/CubikTable.stories.tsx

import React from 'react'
import { CubikTable } from '@squaress/ui/cubik-table'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'
// Sample data
type Person = {
    firstName: string
    lastName: string
    age: number
    subRows?: Person[]
}

const data: Person[] = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 28,
        subRows: [
            {
                firstName: 'Jane',
                lastName: 'Doe',
                age: 26,
            },
        ],
    },
    {
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 34,
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 45,
    },
]

// Column definitions
const columns: ColumnDef<Person>[] = [
    {
        header: 'First Name',
        accessorKey: 'firstName',
    },
    {
        header: 'Last Name',
        accessorKey: 'lastName',
    },
    {
        header: 'Age',
        accessorKey: 'age',
    },
]

export default {
    title: 'Components/CubikTable',
    component: CubikTable,
} as Meta<typeof CubikTable>

export const Default: StoryObj<typeof CubikTable> = {
    args: {
        columns: columns,
        data: data,
        showHeader: true,
    },
}

export const WithoutHeader: StoryObj<typeof CubikTable> = {
    args: {
        columns: columns,
        data: data,
        showHeader: false,
    },
}
