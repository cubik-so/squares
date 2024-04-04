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
        displayName: 'Figma',
        paths: [
            {
                d: 'M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0v3.5A3.5 3.5 0 1 1 8.5 16m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z',
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

export const Figma = forwardRef(IconComponent)
