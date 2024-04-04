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
        displayName: 'Donation',
        paths: [
            {
                d: 'M15.424 14h4.47c1.364 0 3.468 1.687 1.951 2.997C17.5 21 10.5 21 6 16.913M10 16h4.838c.764 0 1.26-.803.919-1.486A2.738 2.738 0 0 0 13.307 13h-1.122a.785.785 0 0 1-.35-.083 10.466 10.466 0 0 0-5.839-1.04m0 0A2 2 0 0 0 2 12v5a2 2 0 1 0 4 0v-.087m-.004-5.037C6 11.917 6 11.96 6 12v4.913M19.5 3.627A3.5 3.5 0 0 1 18 9.964M17 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z',
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

export const Donation = forwardRef(IconComponent)
