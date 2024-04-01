import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Filter = (props: Props) =>
    CreateIcon({
        displayName: 'Filter',
        paths: [
            {
                d: 'M6.66667 10H13.3333M9.16667 15H10.8333M3.33334 5H16.6667',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
