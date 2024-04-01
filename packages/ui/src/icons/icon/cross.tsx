import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Cross = (props: Props) =>
    CreateIcon({
        displayName: 'Cross',
        paths: [{ d: 'm6 18 6-6m0 0 6-6m-6 6L6 6m6 6 6 6', fill: false, stroke: true }],
        viewBox: '0 0 24 24',
        ...props,
    })
