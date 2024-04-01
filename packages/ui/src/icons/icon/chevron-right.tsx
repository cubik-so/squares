import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ChevronRight = (props: Props) =>
    CreateIcon({
        displayName: 'ChevronRight',
        paths: [
            {
                d: 'M9 18a30.617 30.617 0 0 0 5.817-5.49.803.803 0 0 0 0-1.02A30.619 30.619 0 0 0 9 6',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
