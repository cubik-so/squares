import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Globe = (props: Props) =>
    CreateIcon({
        displayName: 'Globe',
        paths: [
            {
                d: 'M2.85 12h18.3m-18.3 0A9.15 9.15 0 0 0 12 21.15M2.85 12A9.15 9.15 0 0 1 12 2.85M21.15 12A9.15 9.15 0 0 1 12 21.15M21.15 12A9.15 9.15 0 0 0 12 2.85m0 0A14 14 0 0 1 15.66 12 14 14 0 0 1 12 21.15m0-18.3A14 14 0 0 0 8.34 12 14 14 0 0 0 12 21.15',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
