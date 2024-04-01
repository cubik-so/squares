import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const DoubleChevronRight = (props: Props) =>
    CreateIcon({
        displayName: 'DoubleChevronRight',
        paths: [
            {
                d: 'M13 8a20.354 20.354 0 0 1 3.894 3.702.472.472 0 0 1 0 .596A20.355 20.355 0 0 1 13 16M7 8a20.355 20.355 0 0 1 3.894 3.702.472.472 0 0 1 0 .596A20.357 20.357 0 0 1 7 16',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
