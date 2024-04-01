import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Danger = (props: Props) =>
    CreateIcon({
        displayName: 'Danger',
        paths: [
            { d: 'M10.3 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', fill: false, stroke: true },
            { d: 'M15.7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z', fill: false, stroke: true },
            {
                d: 'M5 10a7 7 0 0 1 14 0v4.419c0 .944-.604 1.782-1.5 2.081a2.194 2.194 0 0 0-1.5 2.081v.094A2.325 2.325 0 0 1 13.675 21h-3.35A2.325 2.325 0 0 1 8 18.675v-.094c0-.944-.604-1.782-1.5-2.081A2.194 2.194 0 0 1 5 14.419V10Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
