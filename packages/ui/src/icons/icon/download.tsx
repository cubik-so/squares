import React, { forwardRef } from 'react'
import { CreateIcon } from '../../utils/create-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { color, ...props },
    ref,
) => {
    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: 'Download',
        paths: [
            {
                d: 'M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5M9 12.188a15 15 0 0 0 2.556 2.655c.13.104.287.157.444.157m3-2.812a14.998 14.998 0 0 1-2.556 2.655A.704.704 0 0 1 12 15m0 0V4',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const Download = forwardRef(IconComponent)
