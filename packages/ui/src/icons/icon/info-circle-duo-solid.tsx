import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const InfoCircleDuoSolid = (props: Props) =>
    CreateIcon({
        displayName: 'InfoCircleDuoSolid',
        paths: [
            {
                d: 'M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z',
                opacity: 0.28,
                fill: true,
                stroke: false,
            },
            { d: 'M12 12V16M12 8.62503V8.6239', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
