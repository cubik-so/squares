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
        displayName: 'CircleDot',
        paths: [
            {
                d: 'M1.425 6a4.575 4.575 0 1 0 9.15 0 4.575 4.575 0 0 0-9.15 0Z',
                fill: false,
                stroke: true,
            },
            { d: 'M6 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const CircleDot = forwardRef(IconComponent)
