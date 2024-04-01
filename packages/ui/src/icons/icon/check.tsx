import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Check = (props: Props) =>
    CreateIcon({
        displayName: 'Check',
        paths: [
            {
                d: 'm4 12.374 5.351 5.346.428-.748a30.506 30.506 0 0 1 9.278-10.048L20 6.28',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
