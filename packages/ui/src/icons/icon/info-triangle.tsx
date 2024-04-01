import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const InfoTriangle = (props: Props) =>
    CreateIcon({
        displayName: 'InfoTriangle',
        paths: [
            {
                d: 'M12 13v3m0-6v.001m-1.236-5.749a3.152 3.152 0 0 1 2.472 0c2.356 1.003 7.924 9.9 7.76 12.279a3.227 3.227 0 0 1-1.265 2.35c-1.967 1.492-13.495 1.492-15.462 0a3.227 3.227 0 0 1-1.265-2.35c-.164-2.378 5.404-11.276 7.76-12.279Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
