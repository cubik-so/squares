import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Plus = (props: Props) =>
    CreateIcon({
        displayName: 'Plus',
        paths: [{ d: 'M12 19v-7m0 0V5m0 7H5m7 0h7', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
