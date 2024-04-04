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
        displayName: 'Compass',
        paths: [
            {
                d: 'M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M9.587 15.498a6.332 6.332 0 0 0 5.91-5.91 1.021 1.021 0 0 0-1.084-1.086 6.332 6.332 0 0 0-5.91 5.91c-.04.616.47 1.125 1.084 1.086Z',
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

export const Compass = forwardRef(IconComponent)
