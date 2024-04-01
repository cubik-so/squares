import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const AlertTriangle = (props: Props) =>
    CreateIcon({
        displayName: 'AlertTriangle',
        paths: [
            {
                d: 'M12 13V8.938M12 16v-.001m1.236-11.747a3.152 3.152 0 0 0-2.472 0c-2.356 1.003-7.924 9.9-7.76 12.279.063.932.525 1.79 1.265 2.35 1.967 1.492 13.495 1.492 15.462 0a3.227 3.227 0 0 0 1.265-2.35c.164-2.378-5.404-11.276-7.76-12.279Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
