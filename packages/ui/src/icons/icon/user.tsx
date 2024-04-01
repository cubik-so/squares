import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const User = (props: Props) =>
    CreateIcon({
        displayName: 'User',
        paths: [
            { d: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z', fill: false, stroke: true },
            {
                d: 'M16 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 4 4 0 0 0-4-4Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
