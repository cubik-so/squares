import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const CurrencySignDollar = (props: Props) =>
    CreateIcon({
        displayName: 'CurrencySignDollar',
        paths: [
            {
                d: 'M12 3V21M17 7.5C16.63 5.9473 15.3249 4.8 13.7717 4.8H12H10.3333C8.49238 4.8 7 6.41177 7 8.4C7 10.3882 8.49238 12 10.3333 12H12L13.6667 12C15.5076 12 17 13.6118 17 15.6C17 17.5882 15.5076 19.2 13.6667 19.2H12H10.2283C8.67512 19.2 7.37004 18.0527 7 16.5',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
