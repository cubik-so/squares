import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '../button'
import type { ButtonProps } from '../button'

interface Props extends ButtonProps {}
export const PreviousButton = (props: Props) => {
    return (
        <Button {...props} leftIconName="chevronLeft" size={'md'} type="button" variant={'outline'}>
            Previous
        </Button>
    )
}
export const NextButton = (props: Props) => {
    return (
        <Button
            {...props}
            rightIconName="chevronRight"
            size={'md'}
            type="button"
            variant={'outline'}
        >
            Next
        </Button>
    )
}

export const PaginationCounterButton = (props: Props) => {
    return (
        <Button {...props} size={'md'} type="button">
            {props.children}
        </Button>
    )
}

interface PaginationProps {
    page: number
    maxPage: number
    route: string
}
export const PaginationButton = ({ page, maxPage, route }: PaginationProps) => {
    const router = useRouter()
    const pages = Array.from({ length: maxPage }, (_, i) => i + 1)

    const renderPages = () => {
        if (maxPage <= 6) {
            return pages.map(renderPageButton)
        }

        let startPages = [1, 2, 3]
        let endPages = [maxPage - 2, maxPage - 1, maxPage]

        if (page > 3 && page < maxPage - 2) {
            startPages = [1, 2]
            endPages = [maxPage - 1, maxPage]
        }

        const middlePages = page > 3 && page < maxPage - 2 ? [page - 1, page, page + 1] : []
        return (
            <>
                {startPages.map(renderPageButton)}
                {page > 4 && (
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
                router.push(`${route}${pageNumber}`, {
                    scroll: false,
                })
            }}
        >
            {pageNumber}
        </PaginationCounterButton>
    )

    return (
        <div className="flex h-14 w-full items-center justify-between px-1">
            <PreviousButton
                onClick={() => {
                    router.push(`${route}${page - 1}`, {
                        scroll: false,
                    })
                }}
                disabled={page === 1}
            />
            <div className="flex gap-2">{renderPages()}</div>
            <NextButton
                disabled={page >= maxPage}
                onClick={() => {
                    router.push(`${route}${page + 1}`, {
                        scroll: false,
                    })
                }}
            />
        </div>
    )
}
