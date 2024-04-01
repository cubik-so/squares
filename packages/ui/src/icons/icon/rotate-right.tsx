import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const RotateRight = (props: Props) =>
    CreateIcon({
        displayName: 'RotateRight',
        paths: [
            {
                d: 'M17.783 2.67c.51 1.192.862 2.445 1.049 3.726.049.335-.215.485-.479.586l-.094.035m0 0A8 8 0 1 0 19.748 14m-1.489-6.983a15 15 0 0 1-3.476.85',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
