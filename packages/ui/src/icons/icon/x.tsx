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
        displayName: 'X',
        paths: [
            {
                d: 'm19.8 3-6.218 7.105M4.05 21l6.632-7.579m2.901-3.316L9.267 4.013c-.263-.371-.394-.556-.564-.69a1.5 1.5 0 0 0-.506-.262C7.99 3 7.763 3 7.308 3H5.62c-.75 0-1.126 0-1.328.156A.75.75 0 0 0 4 3.72c-.01.255.207.561.64 1.174l6.041 8.527m2.901-3.316 6.376 9.001c.434.613.65.919.64 1.174a.75.75 0 0 1-.291.564c-.203.156-.578.156-1.328.156H17.29c-.455 0-.682 0-.89-.061a1.5 1.5 0 0 1-.505-.262c-.17-.133-.301-.319-.564-.69l-4.651-6.566',
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

export const X = forwardRef(IconComponent)
