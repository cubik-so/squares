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
        displayName: 'ArrowDown',
        paths: [
            {
                d: 'M6 14.1696C7.55556 16.273 9.37278 18.1622 11.4057 19.7905C11.5801 19.9302 11.79 20 12 20M18 14.1696C16.4444 16.273 14.6272 18.1622 12.5943 19.7905C12.4199 19.9302 12.21 20 12 20M12 20L12 4',
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

export const ArrowDown = forwardRef(IconComponent)
