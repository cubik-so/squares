import { forwardRef } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { Text } from '@components/text/text'
import { cn } from '@utils/cn'
import type { ColumnDef, ExpandedState, OnChangeFn, TableState } from '@tanstack/react-table'

export type SquaresExpandedState = ExpandedState
interface CubikTableProps<T> {
    onExpandedChange?: OnChangeFn<ExpandedState> | undefined
    columns: ColumnDef<T>[]
    data: T[]
    showHeader?: boolean
    state: Partial<TableState>
}

const CubikTable = forwardRef<HTMLDivElement, CubikTableProps<any>>(
    ({ columns, data, showHeader = true, onExpandedChange, state }, ref) => {
        const table = useReactTable({
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            state: state,
            onExpandedChange: onExpandedChange,
            getSubRows: (row: any) => row.subRows || [],
            getExpandedRowModel: getExpandedRowModel(),
        })

        return (
            <div
                ref={ref}
                className="rounded-md md:rounded-lg w-full bg-card-bg-primary overflow-x-scroll border-table-row-border"
            >
                <table className="w-full">
                    {showHeader && (
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr
                                    className={cn(
                                        'px-3 md:px-6 border-b border-b-table-row-border',
                                    )}
                                    key={headerGroup.id}
                                >
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            className={cn(
                                                'px-2 md:px-3 py-4 md:py-5',
                                                header.index === 0 && 'ps-4 md:ps-6',
                                            )}
                                            key={header.id}
                                        >
                                            <Text
                                                className={
                                                    'b3 md:b4 text-start whitespace-nowrap overflow-hidden overflow-ellipsis'
                                                }
                                                color="tertiary"
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column.columnDef.header,
                                                          header.getContext(),
                                                      )}
                                            </Text>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                    )}

                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr
                                className={`px-3 md:px-6 transition ease-in-out duration-300 ${
                                    row.getIsSelected() ? 'bg-color-bg-cool-base' : 'transparent'
                                } ${
                                    row.index === table.getRowModel().rows.length - 1
                                        ? ''
                                        : 'border-b border-b-table-row-border'
                                }`}
                                key={row.id}
                            >
                                {row.getVisibleCells().map((cell, index) => (
                                    <td
                                        className={cn(
                                            'px-2 md:px-3 py-3 md:py-5',
                                            index === 0 && 'ps-4 md:ps-6',
                                        )}
                                        key={cell.id}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    },
)

CubikTable.displayName = 'CubikTable'
export { CubikTable }
