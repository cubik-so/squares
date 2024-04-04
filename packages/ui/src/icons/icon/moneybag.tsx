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
        displayName: 'MoneyBag',
        paths: [
            {
                d: 'M9.5 8H14.5M9.5 8C9.5 8 3.99996 11 4 16C4.00003 20.0207 7.97931 21 12 21C16.0207 21 20 20.0207 20 16C20 11 14.5 8 14.5 8M9.5 8L8.55725 5.48601C8.23089 4.6157 8.56249 3.64123 9.45158 3.37016C10.1074 3.1702 10.9686 3 12 3C13.0314 3 13.8926 3.1702 14.5484 3.37016C15.4375 3.64123 15.7691 4.6157 15.4427 5.48601L14.5 8',
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

export const MoneyBag = forwardRef(IconComponent)
