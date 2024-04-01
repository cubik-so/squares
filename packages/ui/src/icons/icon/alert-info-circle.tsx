import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const AlertInfoCircle = (props: Props) =>
    CreateIcon({
        displayName: 'AlertInfoCircle',
        paths: [
            {
                d: 'M12 12v4m0-7.375v-.001M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
