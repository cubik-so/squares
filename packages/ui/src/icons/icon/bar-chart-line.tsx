import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const BarChartLine = (props: Props) =>
    CreateIcon({
        displayName: 'BarChartLine',
        paths: [{ d: 'M6 20L6 14M12 20L12 4M18 20V10', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
