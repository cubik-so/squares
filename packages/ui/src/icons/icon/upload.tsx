import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Upload = (props: Props) =>
    CreateIcon({
        displayName: 'Upload',
        paths: [
            {
                d: 'M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5M9 6.812a15.001 15.001 0 0 1 2.556-2.655A.703.703 0 0 1 12 4m3 2.812a15 15 0 0 0-2.556-2.655A.703.703 0 0 0 12 4m0 0v11',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
