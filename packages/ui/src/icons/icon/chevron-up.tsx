import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ChevronUp = (props: Props) =>
    CreateIcon({
        displayName: 'ChevronUp',
        paths: [
            {
                d: 'M6 15a30.617 30.617 0 0 1 5.49-5.817.803.803 0 0 1 1.02 0A30.616 30.616 0 0 1 18 15',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
