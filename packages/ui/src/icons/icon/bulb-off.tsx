import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const BulbOff = (props: Props) =>
    CreateIcon({
        displayName: 'BulbOff',
        paths: [
            {
                d: 'M10.379 21h3.242M12 2V1m7 3.707L19.707 4m-15 .707L4 4m18 7h-1M3 11H2m4.313-.532c0-3.023 2.546-5.474 5.687-5.474 3.141 0 5.688 2.45 5.688 5.474 0 1.657-.765 3.142-1.974 4.146-.51.424-.95.95-1.117 1.593l-.227.875c-.14.537-.624.912-1.18.912h-2.38c-.555 0-1.04-.375-1.18-.912l-.227-.875c-.167-.643-.606-1.17-1.116-1.593-1.21-1.004-1.974-2.489-1.974-4.146Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
