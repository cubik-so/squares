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
        displayName: 'Bank',
        paths: [
            {
                fill: false,
                stroke: true,
                d: 'M2 21h20M4 13v5m5-5v5m6-5v5m5-5v5m2-8H2V9l8.08-6.06c.688-.516 1.033-.775 1.41-.874a2 2 0 0 1 1.02 0c.377.1.722.358 1.41.874L22 9v1Z',
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const Bank = forwardRef(IconComponent)
