import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Tactics = (props: Props) =>
    CreateIcon({
        displayName: 'Tactics',
        paths: [
            {
                d: 'M4 6.00001L6 8.00001M6 8.00001L8 10M6 8.00001L8 6.00001M6 8.00001L4 10M16 16L18 18M18 18L20 20M18 18L20 16M18 18L16 20M14 7L16 4L19 6.00001M16.25 5.50001C18 10 13.5 12.5 12 13.5M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
