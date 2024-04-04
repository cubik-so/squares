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
        displayName: 'Solarplex',
        paths: [
            {
                d: 'M3.93552 8C3.93552 8 8 8 9 8C10 8 10 8 10 7C10 6 10 6 11 6C12 6 14 6 14 6M3.05493 13C3.05493 13 8 13 9 13C10 13 10 13 10 12C10 11 10 11 11 11C12 11 16 11 16 11M5.29168 18C5.29168 18 8 18 9 18C10 18 10 18 10 17C10 16 10 16 11 16C12 16 15 16 15 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z',
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

export const Solarplex = forwardRef(IconComponent)
