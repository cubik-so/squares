import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Solscan = (props: Props) =>
    CreateIcon({
        displayName: 'Solscan',
        paths: [
            {
                d: 'M19.8913 16.6358C21.8108 13.3687 21.5604 9.1121 18.9644 6.06543C15.687 2.21898 9.91188 1.75771 6.06543 5.03517C2.21898 8.31262 1.75771 14.0877 5.03517 17.9341C7.6311 20.9808 11.7939 21.9037 15.3242 20.5272M15.9997 12.0002C15.9997 14.2093 14.2088 16.0002 11.9997 16.0002C9.79053 16.0002 7.99967 14.2093 7.99967 12.0002C7.99967 9.79102 9.79053 8.00016 11.9997 8.00016C14.2088 8.00016 15.9997 9.79102 15.9997 12.0002ZZ',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
