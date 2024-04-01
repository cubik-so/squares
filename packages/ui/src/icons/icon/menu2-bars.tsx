import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Menu2Bars = (props: Props) =>
    CreateIcon({
        displayName: 'Menu2Bars',
        paths: [{ d: 'M4 16h16M4 8h16', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
