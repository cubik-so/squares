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
        displayName: 'ShoppingBagBookmark2',
        paths: [
            {
                d: 'M15.0012 8V6C15.0012 4.34315 13.6581 3 12.0012 3C10.3444 3 9.00124 4.34315 9.00124 6V8M11.0012 21H6.83246C5.60669 21 4.66933 19.9074 4.85572 18.6959L6.24033 9.69589C6.39043 8.72022 7.22993 8 8.21708 8H15.7854C16.7725 8 17.612 8.72022 17.7621 9.69589L17.9628 11M19.0012 15H16.0012C15.449 15 15.0012 15.4477 15.0012 16V21L17.5012 19.5L20.0012 21V16C20.0012 15.4477 19.5535 15 19.0012 15Z',
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

export const ShoppingBagBookmark2 = forwardRef(IconComponent)
