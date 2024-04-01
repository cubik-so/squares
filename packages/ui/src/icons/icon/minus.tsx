import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Minus = (props: Props) =>
    CreateIcon({
        displayName: 'Minus',
        paths: [{ d: 'M2.91675 7H11.0834', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
