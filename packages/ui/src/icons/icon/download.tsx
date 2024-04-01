import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Download = (props: Props) =>
    CreateIcon({
        displayName: 'Download',
        paths: [
            {
                d: 'M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5M9 12.188a15 15 0 0 0 2.556 2.655c.13.104.287.157.444.157m3-2.812a14.998 14.998 0 0 1-2.556 2.655A.704.704 0 0 1 12 15m0 0V4',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
