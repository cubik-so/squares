import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const SolanaFM = (props: Props) =>
    CreateIcon({
        displayName: 'SolanaFM',
        paths: [
            {
                d: 'M15.515 12.5C15.0885 15.7993 12.3649 18.3784 9.00041 18.5809M18.9881 12.5C18.7276 17.7906 14.3556 22 9.00041 22M8.48578 11.5C8.93019 8.06212 11.8688 5.40625 15.4277 5.40625M5.0127 11.5C5.27321 6.20944 9.64523 2 15.0004 2M9.00041 15C10.6573 15 12.0004 13.6569 12.0004 12C12.0004 10.3431 13.3436 9 15.0004 9',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
