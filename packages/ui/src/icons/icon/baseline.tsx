import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Baseline = (props: Props) =>
    CreateIcon({
        displayName: 'Baseline',
        paths: [
            {
                d: 'M6.5 16L9.48243 7.54967C10.4087 4.92532 10.8718 3.61315 11.5542 3.24688C12.1449 2.92983 12.8551 2.92983 13.4458 3.24688C14.1282 3.61315 14.5913 4.92532 15.5176 7.54967L18.5 16M8.5 11H16.5M17.5 20L7.5 20',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
