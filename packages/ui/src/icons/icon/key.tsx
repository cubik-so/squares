import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Key = (props: Props) =>
    CreateIcon({
        displayName: 'Key',
        paths: [
            { d: 'M14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm0 0H2v3m4-3v2', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
