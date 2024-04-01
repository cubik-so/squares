import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const MoneyBagAdd = (props: Props) =>
    CreateIcon({
        displayName: 'MoneyBagAdd',
        paths: [
            {
                d: 'M9.5 8H14.5M9.5 8C9.5 8 3.99996 11 4 16C4.00003 20.0207 7.97931 21 12 21M9.5 8L8.55725 5.48601C8.23089 4.6157 8.56249 3.64123 9.45158 3.37016C10.1074 3.1702 10.9686 3 12 3C13.0314 3 13.8926 3.1702 14.5484 3.37016C15.4375 3.64123 15.7691 4.6157 15.4427 5.48601L14.5 8M14.5 8C14.5 8 16.4637 9.07111 18.0444 11M17.001 14V17M17.001 17V20M17.001 17H14.001M17.001 17H20.001',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
