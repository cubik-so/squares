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
        displayName: 'ArrowUp',
        paths: [
            {
                d: 'M6 8.83a30.23 30.23 0 0 1 5.406-5.62A.949.949 0 0 1 12 3m6 5.83a30.233 30.233 0 0 0-5.406-5.62A.949.949 0 0 0 12 3m0 0v18',
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

export const ArrowUp = forwardRef(IconComponent)
