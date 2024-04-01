import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Share = (props: Props) =>
    CreateIcon({
        displayName: 'Share',
        paths: [
            {
                d: 'M15.41 6.51c-2.583.773-4.925 2.033-6.82 3.98m6.82 7c-2.583-.773-4.925-2.033-6.82-3.98M21 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
