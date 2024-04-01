import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ThreeDots = (props: Props) =>
    CreateIcon({
        displayName: 'ThreeDots',
        paths: [
            { d: 'M12 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z', fill: false, stroke: true },
            { d: 'M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z', fill: false, stroke: true },
            { d: 'M12 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
