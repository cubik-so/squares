import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Spinner = (props: Props) =>
    CreateIcon({
        displayName: 'Spinner',
        paths: [
            {
                d: 'M12 2v4m0 12v4M6 12H2m20 0h-4m1.078 7.078L16.25 16.25M19.078 5 16.25 7.828M4.922 19.078 7.75 16.25M4.922 5 7.75 7.828',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
