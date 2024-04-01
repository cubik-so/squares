import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Italic = (props: Props) =>
    CreateIcon({
        displayName: 'Italic',
        paths: [{ d: 'm13.5 5-3 14m3.5 0H7M17 5h-7', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
