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
        displayName: 'Farcaster',
        paths: [
            {
                d: 'M3.97889 19.0422L3.14472 20.7106C3.07823 20.8435 3.17493 21 3.32361 21H9.4614C9.60104 21 9.6977 20.8605 9.64867 20.7298L9.01273 19.034C9.00431 19.0115 9 18.9877 9 18.9637V13C9 11.8667 8.91429 10 12 10C15.0857 10 15 11.8667 15 13V18.9528C15 18.9838 14.9928 19.0145 14.9789 19.0422L14.1447 20.7106C14.0782 20.8435 14.1749 21 14.3236 21H20.6764C20.8251 21 20.9218 20.8435 20.8553 20.7106L20.0211 19.0422C20.0072 19.0145 20 18.9838 20 18.9528V8.03287C20 8.0111 20.0036 7.98948 20.0105 7.96886L20.9108 5.30401C20.9546 5.17436 20.8582 5.04 20.7213 5.04H18.2C18.0895 5.04 18 4.95046 18 4.84V3.2C18 3.08954 17.9105 3 17.8 3H6.2C6.08954 3 6 3.08954 6 3.2V4.84C6 4.95046 5.91046 5.04 5.8 5.04H3.27867C3.14182 5.04 3.04539 5.17436 3.08919 5.30401L3.98948 7.96886C3.99645 7.98948 4 8.0111 4 8.03287V18.9528C4 18.9838 3.99277 19.0145 3.97889 19.0422Z',
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

export const Farcaster = forwardRef(IconComponent)
