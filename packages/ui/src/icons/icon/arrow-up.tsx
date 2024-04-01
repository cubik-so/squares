import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ArrowUp = (props: Props) =>
    CreateIcon({
        displayName: 'ArrowUp',
        paths: [
            {
                d: 'M6 8.83a30.23 30.23 0 0 1 5.406-5.62A.949.949 0 0 1 12 3m6 5.83a30.233 30.233 0 0 0-5.406-5.62A.949.949 0 0 0 12 3m0 0v18',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
