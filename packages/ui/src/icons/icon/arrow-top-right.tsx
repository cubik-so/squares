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
        displayName: 'ArrowTopRight',
        paths: [
            {
                d: 'M9.999 5.516a30.232 30.232 0 0 1 7.796-.152c.223.025.42.124.569.272m.12 8.365a30.23 30.23 0 0 0 .152-7.797.948.948 0 0 0-.272-.568m0 0L5.636 18.364',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

export const ArrowTopRight = forwardRef(IconComponent)
