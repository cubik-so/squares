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
        displayName: 'Cart',
        paths: [
            {
                d: 'M2 3.65918H3.22465C4.20873 3.65918 4.70077 3.65918 5.09673 3.84014C5.44567 3.99961 5.74138 4.25608 5.9486 4.57896C6.18374 4.94536 6.25332 5.43245 6.39249 6.40663L7.60751 14.9118C7.74668 15.886 7.81626 16.3731 8.0514 16.7395C8.25862 17.0623 8.55433 17.3188 8.90327 17.4783C9.29923 17.6592 9.79127 17.6592 10.7753 17.6592H14.2717C16.2974 17.6592 17.3102 17.6592 18.1165 17.2816C18.8268 16.9489 19.4236 16.4147 19.8326 15.7456C20.297 14.9859 20.4089 13.9794 20.6325 11.9663C20.6624 11.6978 20.6927 11.4253 20.7237 11.146C20.82 10.279 20.8682 9.84544 20.7334 9.50089C20.6148 9.19798 20.401 8.94182 20.1242 8.77101C19.8093 8.57671 19.3744 8.54656 18.5044 8.48626L6.57143 7.65918M10 21.6592C10 22.2115 9.55228 22.6592 9 22.6592C8.44772 22.6592 8 22.2115 8 21.6592C8 21.1069 8.44772 20.6592 9 20.6592C9.55228 20.6592 10 21.1069 10 21.6592ZM19 21.6592C19 22.2115 18.5523 22.6592 18 22.6592C17.4477 22.6592 17 22.2115 17 21.6592C17 21.1069 17.4477 20.6592 18 20.6592C18.5523 20.6592 19 21.1069 19 21.6592Z',
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

export const Cart = forwardRef(IconComponent)
