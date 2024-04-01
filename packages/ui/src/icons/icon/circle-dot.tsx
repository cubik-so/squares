import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const CircleDot = (props: Props) =>
    CreateIcon({
        displayName: 'CircleDot',
        paths: [
            {
                d: 'M1.425 6a4.575 4.575 0 1 0 9.15 0 4.575 4.575 0 0 0-9.15 0Z',
                fill: false,
                stroke: true,
            },
            { d: 'M6 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
