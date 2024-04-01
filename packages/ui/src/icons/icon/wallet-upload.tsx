import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const WalletUpload = (props: Props) =>
    CreateIcon({
        displayName: 'WalletUpload',
        paths: [
            {
                d: 'M2 14.5V11c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h3.5c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624c.207.5.226 1.123.228 2.28M2 14.5c0 1.33 0 2.495.38 3.413a5 5 0 0 0 2.707 2.706C6.005 21 7.17 21 9.5 21H16M2 14.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 5.088 7.38C6.005 7 7.17 7 9.5 7h5c1.634 0 2.695 0 3.5.131M14 12h3m1-4.869c.343.056.639.136.913.25a5 5 0 0 1 2.706 2.706c.114.274.194.57.25.913',
                fill: false,
                stroke: true,
            },
            {
                d: 'M18 16.874a10 10 0 0 1 1.704-1.77A.469.469 0 0 1 20 15m2 1.874a10 10 0 0 0-1.704-1.77A.469.469 0 0 0 20 15m0 0v6',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
