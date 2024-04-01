import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ArrowTopRight = (props: Props) =>
    CreateIcon({
        displayName: 'ArrowTopRight',
        paths: [
            {
                d: 'M9.999 5.516a30.232 30.232 0 0 1 7.796-.152c.223.025.42.124.569.272m.12 8.365a30.23 30.23 0 0 0 .152-7.797.948.948 0 0 0-.272-.568m0 0L5.636 18.364',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
