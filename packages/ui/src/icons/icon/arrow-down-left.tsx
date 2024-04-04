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
        displayName: 'ArrowDownLeft',
        paths: [
            {
                d: 'M5.51601 9.99855C5.12863 12.5858 5.07776 15.2066 5.36385 17.7955C5.38839 18.0176 5.48747 18.2154 5.63594 18.3639M14.0013 18.4838C11.414 18.8712 8.79321 18.9221 6.20434 18.636C5.98226 18.6115 5.7844 18.5124 5.63594 18.3639M5.63594 18.3639L18.3639 5.63599',
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

export const ArrowDownLeft = forwardRef(IconComponent)
