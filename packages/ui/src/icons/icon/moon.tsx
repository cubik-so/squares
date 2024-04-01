import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Moon = (props: Props) =>
    CreateIcon({
        displayName: 'Moon',
        paths: [
            {
                d: 'M21 13.907A7.948 7.948 0 0 1 10.093 3 9.112 9.112 0 1 0 21 13.907Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
