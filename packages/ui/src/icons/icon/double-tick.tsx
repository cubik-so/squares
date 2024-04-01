import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const DoubleTick = (props: Props) =>
    CreateIcon({
        displayName: 'DoubleTick',
        paths: [
            {
                d: 'm2.447 12.327 4.682 4.678.374-.654a26.682 26.682 0 0 1 8.119-8.793l.825-.563m5.106.614-.87.49a26.693 26.693 0 0 0-8.837 8.07l-.428.62-.298-.352',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
