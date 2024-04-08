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
        displayName: 'ShoppingCartContrast',
        paths: [
            {
                d: 'M7.60738 14.9119L7.60737 14.9118L6.57129 7.65918L18.5043 8.48626C19.3743 8.54656 19.8092 8.57671 20.1241 8.77101C20.4009 8.94182 20.6147 9.19798 20.7333 9.50089C20.868 9.84534 20.8199 10.2787 20.7236 11.1453L20.7236 11.146L20.6324 11.9663C20.4088 13.9794 20.2969 14.9859 19.8325 15.7456C19.4235 16.4147 18.8267 16.9489 18.1164 17.2816C17.3101 17.6592 16.2973 17.6592 14.2716 17.6592H10.7752C9.79113 17.6592 9.29909 17.6592 8.90313 17.4783C8.55419 17.3188 8.25848 17.0623 8.05126 16.7395C7.81613 16.3731 7.74654 15.886 7.60738 14.9119Z',
                opacity: 0.28,
                fill: true,
                stroke: false,
            },
            {
                d: 'M2 3.65918H3.22465C4.20873 3.65918 4.70077 3.65918 5.09673 3.84014C5.44567 3.99961 5.74138 4.25608 5.9486 4.57896C6.18374 4.94536 6.25332 5.43245 6.39249 6.40663L7.60751 14.9118C7.74668 15.886 7.81626 16.3731 8.0514 16.7395C8.25862 17.0623 8.55433 17.3188 8.90327 17.4783C9.29923 17.6592 9.79127 17.6592 10.7753 17.6592H14.2717C16.2974 17.6592 17.3102 17.6592 18.1165 17.2816C18.8268 16.9489 19.4236 16.4147 19.8326 15.7456C20.297 14.9859 20.4089 13.9794 20.6325 11.9663C20.6624 11.6978 20.6927 11.4253 20.7237 11.146C20.82 10.279 20.8682 9.84544 20.7334 9.50089C20.6148 9.19798 20.401 8.94182 20.1242 8.77101C19.8093 8.57671 19.3744 8.54656 18.5044 8.48626L6.57143 7.65918M10 21.6592C10 22.2115 9.55228 22.6592 9 22.6592C8.44772 22.6592 8 22.2115 8 21.6592C8 21.1069 8.44772 20.6592 9 20.6592C9.55228 20.6592 10 21.1069 10 21.6592ZM19 21.6592C19 22.2115 18.5523 22.6592 18 22.6592C17.4477 22.6592 17 22.2115 17 21.6592C17 21.1069 17.4477 20.6592 18 20.6592C18.5523 20.6592 19 21.1069 19 21.6592Z',
                stroke: true,
                fill: false,
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

export const ShoppingCartContrast = forwardRef(IconComponent)