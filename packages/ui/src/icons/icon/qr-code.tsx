import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const QrCode = (props: Props) =>
    CreateIcon({
        displayName: 'QrCode',
        paths: [
            {
                d: 'M14 14V16H16M18 14H20M20 18H18V20M14 19.99V20M17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10ZM7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17C10 18.6569 8.65685 20 7 20ZM7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7C10 8.65685 8.65685 10 7 10Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
