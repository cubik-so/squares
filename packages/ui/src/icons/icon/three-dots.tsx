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
        displayName: 'ThreeDots',
        paths: [
            { d: 'M12 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z', fill: false, stroke: true },
            { d: 'M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z', fill: false, stroke: true },
            { d: 'M12 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

export const ThreeDots = forwardRef(IconComponent)
