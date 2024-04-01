import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Menu3Bars = (props: Props) =>
    CreateIcon({
        displayName: 'Menu3Bars',
        paths: [{ d: 'M4 12h16M4 18h16M4 6h16', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
