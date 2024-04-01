import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const HeadingH1 = (props: Props) =>
    CreateIcon({
        displayName: 'HeadingH1',
        paths: [
            {
                d: 'M4 12h8m-8 6V6m8 12V6m7 12v-8c-.962.236-1.698.898-2.134 1.771M19 18h-2.5m2.5 0h2.5',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
