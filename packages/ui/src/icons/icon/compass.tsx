import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Compass = (props: Props) =>
    CreateIcon({
        displayName: 'Compass',
        paths: [
            {
                d: 'M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M9.587 15.498a6.332 6.332 0 0 0 5.91-5.91 1.021 1.021 0 0 0-1.084-1.086 6.332 6.332 0 0 0-5.91 5.91c-.04.616.47 1.125 1.084 1.086Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
