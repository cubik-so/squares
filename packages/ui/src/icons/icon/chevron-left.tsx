import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ChevronLeft = (props: Props) =>
    CreateIcon({
        displayName: 'ChevronLeft',
        paths: [
            {
                d: 'M15 18a30.616 30.616 0 0 1-5.817-5.49.803.803 0 0 1 0-1.02A30.617 30.617 0 0 1 15 6',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
