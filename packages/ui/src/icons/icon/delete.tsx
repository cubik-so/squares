import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Delete = (props: Props) =>
    CreateIcon({
        displayName: 'Delete',
        paths: [
            {
                d: 'm16 6-1.106-2.211a3.236 3.236 0 0 0-5.788 0L8 6M4 6h16m-10 5v5m4-5v5M6 6h12v9c0 1.864 0 2.796-.305 3.53a4 4 0 0 1-2.164 2.165C14.796 21 13.864 21 12 21s-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C6 17.796 6 16.864 6 15V6Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
