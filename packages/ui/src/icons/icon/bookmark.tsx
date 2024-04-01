import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Bookmark = (props: Props) =>
    CreateIcon({
        displayName: 'Bookmark',
        paths: [
            {
                d: 'M4.58325 8.25016C4.58325 6.54399 4.58325 5.6909 4.80758 5.0005C5.26095 3.60516 6.35492 2.51119 7.75026 2.05782C8.44066 1.8335 9.29374 1.8335 10.9999 1.8335C12.7061 1.8335 13.5592 1.8335 14.2496 2.05782C15.6449 2.51119 16.7389 3.60516 17.1923 5.0005C17.4166 5.6909 17.4166 6.54399 17.4166 8.25016V20.1668L15.7724 18.7575C14.0785 17.3056 13.2316 16.5797 12.2817 16.303C11.4446 16.0591 10.5552 16.0591 9.7181 16.303C8.76826 16.5797 7.92133 17.3056 6.22745 18.7575L4.58325 20.1668V8.25016Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
