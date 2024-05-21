import React from 'react'

import { NextButton, PaginationCounterButton, PreviousButton } from './pagination-button'

interface PaginationProps {
    page: number
    maxPage: number
    setCurrentPage: (value: number) => void
}
export const ClientPaginationButton = ({ page, maxPage, setCurrentPage }: PaginationProps) => {
    const pages = Array.from({ length: maxPage }, (_, i) => i + 1)

    const renderPages = () => {
        if (maxPage <= 6) {
            return pages.map(renderPageButton)
        }

        let startPages = [1, 2, 3]
        let endPages = [maxPage - 2, maxPage - 1, maxPage]

        if (page > 2 && page < maxPage - 2) {
            startPages = [1, 2]
            endPages = [maxPage - 1, maxPage]
        }

        const middlePages = page > 2 && page < maxPage - 2 ? [page, page + 1] : []
        return (
            <>
                {startPages.map(renderPageButton)}
                {page > 3 && (
                    <PaginationCounterButton variant={'outline'} size={'md'}>
                        ...
                    </PaginationCounterButton>
                )}
                {middlePages.map(renderPageButton)}
                {page < maxPage - 3 && (
                    <PaginationCounterButton variant={'outline'} size={'md'}>
                        ...
                    </PaginationCounterButton>
                )}
                {endPages.map(renderPageButton)}
            </>
        )
    }

    const renderPageButton = (pageNumber: number) => (
        <PaginationCounterButton
            key={pageNumber}
            variant={page === pageNumber ? 'secondary' : 'outline'}
            size={'md'}
            onClick={() => {
                setCurrentPage(pageNumber)
            }}
        >
            {pageNumber}
        </PaginationCounterButton>
    )

    return (
        <div className="flex h-14 w-full items-center justify-between px-1">
            <PreviousButton
                onClick={() => {
                    setCurrentPage(page - 1)
                }}
                disabled={page === 1}
            />
            <div className="flex gap-2">{renderPages()}</div>
            <NextButton
                disabled={page >= maxPage}
                onClick={() => {
                    console.log('first', page)
                    setCurrentPage(page + 1)
                }}
            />
        </div>
    )
}
