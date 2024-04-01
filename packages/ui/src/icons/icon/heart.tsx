import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Heart = (props: Props) =>
    CreateIcon({
        displayName: 'Heart',
        paths: [
            {
                d: 'M12 21.6592C13 21.6592 22 16.636 22 9.60345C22 4.1659 15.1625 1.32083 12 6.08658C8.83207 1.31266 2 4.16098 2 9.60345C2 16.636 11 21.6592 12 21.6592Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
