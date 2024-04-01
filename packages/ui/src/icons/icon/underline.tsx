import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Underline = (props: Props) =>
    CreateIcon({
        displayName: 'Underline',
        paths: [{ d: 'M17 20H7M17 4v6.667a5 5 0 0 1-10 0V4', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
