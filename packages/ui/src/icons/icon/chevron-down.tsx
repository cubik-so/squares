import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ChevronDown = (props: Props) =>
    CreateIcon({
        displayName: 'ChevronDown',
        paths: [
            {
                d: 'M18 9a30.617 30.617 0 0 1-5.49 5.817.803.803 0 0 1-1.02 0A30.619 30.619 0 0 1 6 9',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
